// MANDATORY CONFIGURATION

require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);

app.get('/', (req, res) => {
	res.send('хуй');
});

// JPEG TO SVG AVATAR CONVERSION

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));

const fs = require('fs');
const potrace = require('potrace');
const { v4 } = require('uuid');

app.post('/createUser', (req, res) => {
	const base64Data = req.body.img.replace(/^data:image\/jpeg;base64,/, '');
	const imgPath = './src/server/temp/pic.jpeg';
	const dirPath = imgPath.match(/^(.*?)temp/)[0];

	fs.mkdir(dirPath, { recursive: true }, err => {
		if (err) throw err;
		console.log('dir created!')
	});

	fs.writeFile(imgPath, base64Data, 'base64', err => {
		if (err) throw err;
		console.log('png saved!')
	});

	const trace = new potrace.Potrace();
	
	trace.loadImage(imgPath, (err) => {
		if (err) throw err;

		const svg = trace.getSVG()
		const id = v4();
		const avatarPlusId = JSON.stringify({ svg, id });

		res.send(avatarPlusId);
		console.log('user created!')
	});
});

const io = require('socket.io')(server);

// LOBBY

let lobbies = [];

app.post('/createLobby', (req, res) => {
	const gameType = req.body.gameType;
	const id = v4();
	const initialLobby = {
		id,
		gameType,
		players: [],
		hostId: undefined
	};

	lobbies.push(initialLobby);
	res.send(JSON.stringify(initialLobby));
});

const findLobby = (lobbyId) => lobbies.find(({ id }) => id === lobbyId);
const editPlayers = (targetLobbyId, newPlayer) => {
	lobbies = lobbies.map(lobby => {
		const { id, players } = lobby;

		if (targetLobbyId === id) {
			return { ...lobby, players: [ ...players, newPlayer ] };
		};

		return lobby
	});
};

const removePlayer = (targetLobbyId, targetPlayerId) => {
	lobbies = lobbies.map(lobby => {
		const { id, players } = lobby;

		if (targetLobbyId === id) {
			const editedPlayers = players.filter(({ id }) => id !== targetPlayerId);
			 
			return { ...lobby, players: editedPlayers };
		};

		return lobby
	});
};

const setHostId = (targetLobbyId, newHostId) => {
	lobbies = lobbies.map(lobby => {
		const { id } = lobby;

		if (targetLobbyId === id) {
			return { ...lobby, hostId: newHostId };
		}

		return lobby;
	});
};

const destroyLobby = (targetLobbyId) => {
	lobbies = lobbies.filter(({ id }) => id !== targetLobbyId)
};

app.post('/getLobby', (req, res) => {
	const targetId = req.body.lobbyId;
	const targetLobby = findLobby(targetId);

	if (!targetLobby) {
		res.send(JSON.stringify(false));
	};

	res.send(JSON.stringify(targetLobby));
});

io.of('/lobby').on('connection', socket => {
	socket.on('newPlayer', ({ user, lobbyId }) => {
		const lobby = findLobby(lobbyId);

		if (!lobby) {
			throw new Error('ТЫ ДАЛБАЁБ');
		};

		editPlayers(lobbyId, user);
		socket.broadcast.emit('newPlayer', { user });
	});

	socket.on('playerLeft', ({ userId, lobbyId }) => {
		removePlayer(lobbyId, userId);
		socket.broadcast.emit('playerLeft', { userId });
	});

	socket.on('newHost', ({ userId, lobbyId }) => {
		setHostId(lobbyId, userId);
		socket.broadcast.emit('newHost', { userId });
	});

	socket.on('destroyLobby', (lobbyId) => {
		destroyLobby(lobbyId);
	});
});

// CHAT 

let msgs = [];

app.get('/getMessages', (req, res) => {
	const msgsToSend = msgs.filter(({ lobbyId }) => lobbyId === req.query.currentLobbyId);

	res.send(JSON.stringify(msgsToSend));
});

io.of('/chat').on('connection', socket => {
	socket.on('newMessage', (msg) => {
		console.log('ЗА АВТОМОБИЛЬ ЧЁРНОГО ЦВЕТА XX ВЕКА');
		msgs.push(msg);
		socket.broadcast.emit('newMessage', msg);
	});

	socket.on('clearChat', () => {
		console.log('ЧИСТО');
		msgs = [];
	})
});

server.listen(process.env.SERVER_PORT, () => console.log('\n working!'))
