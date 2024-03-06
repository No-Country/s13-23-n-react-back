import mysql from 'mysql2/promise';
import { configDb } from '../config/envs.js';

const connection = await mysql.createConnection(configDb);

const TeamRequest = {};

// Obtiene todas las solicitudes de equipo
TeamRequest.getAllTeamRequests = async () => {
    try {
        const [results] = await connection.query('SELECT * FROM team_requests');
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Crea una nueva solicitud de equipo
TeamRequest.createTeamRequest = async (newTeamRequest) => {
    try {
        const { user_id, team_id } = newTeamRequest;
        if (!user_id || !team_id) {
            throw new Error('Todos los campos son obligatorios');
        }
        const [results] = await connection.query(
            'INSERT INTO team_requests (user_id, team_id) VALUES (?, ?)',
            [user_id, team_id],
        );
        return results.insertId;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Obtiene una solicitud de equipo por su ID
TeamRequest.getTeamRequestById = async (requestId) => {
    try {
        const [results] = await connection.query(
            'SELECT * FROM team_requests WHERE id = ?',
            [requestId],
        );
        return results[0] || null;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// Actualiza el estado de una solicitud de equipo
TeamRequest.updateTeamRequestStatus = async (requestId, status) => {
    try {
        const [results] = await connection.query(
            'UPDATE team_requests SET status = ? WHERE id = ?',
            [status, requestId],
        );

        if (results.affectedRows === 0) {
            return null;
        }

        return { id: requestId, status };
    } catch (error) {
        console.error(error);
        throw error;
    }
};
export default TeamRequest;
