import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import AuthRoutes from './routes/auth.routes.js';
import teamRoutes from './routes/team.routes.js';
import PlayerRoutes from './routes/player.routes.js';
import TournamentRoutes from './routes/tournament.routes.js';
import GameRoutes from './routes/games.routes.js';
import fileUpload from 'express-fileupload';
import teamRequestRoutes from './routes/team_requests.routes.js';
const app = express();

// ver logs de las peticiones
app.use(morgan('dev'));
// habilitar CORS
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'http://localhost:3100',
            'http://localhost:5173',
            'http://localhost:5173/',
            'https://spor7play.vercel.app',
        ],
        optionsSuccessStatus: 200,
    }),
);

// habilitar express.json
app.use(express.json());
//Configuracion para express-fileUpload para subir imagenes
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: './uploads',
    }),
);

// Rutas de nuestra aplicación
app.use('/api/auth', AuthRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', PlayerRoutes);
app.use('/api/tournament', TournamentRoutes);
app.use('/api/team-requests', teamRequestRoutes);
app.use('/api/games', GameRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to my application',
    });
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});

export default app;
