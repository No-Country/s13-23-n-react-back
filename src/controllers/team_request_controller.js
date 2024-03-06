import TeamRequest from '../models/team_request.js';

const teamRequestController = {
    createTeamRequest: async (req, res) => {
        try {
            const { user_id, team_id } = req.body;
            const createdRequest = await TeamRequest.createTeamRequest({
                user_id,
                team_id,
            });
            res.status(201).json({
                message: 'Solicitud de equipo creada exitosamente',
                request: createdRequest,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al crear la solicitud de equipo',
            });
        }
    },

    getAllTeamRequests: async (req, res) => {
        try {
            const requests = await TeamRequest.getAllTeamRequests();
            res.status(200).json(requests);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al obtener las solicitudes de equipo',
            });
        }
    },

    getTeamRequestById: async (req, res) => {
        try {
            const { id } = req.params;
            const request = await TeamRequest.getTeamRequestById(id);
            if (!request) {
                res.status(404).json({
                    message: 'Solicitud de equipo no encontrada',
                });
            } else {
                res.status(200).json(request);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error al obtener la solicitud de equipo',
            });
        }
    },

    updateTeamRequestStatus: async (req, res) => {
        try {
            const { id } = req.params;
            const { status } = req.body;

            if (!id || !status) {
                return res.status(400).json({
                    message:
                        'Se requieren tanto el ID como el estado para actualizar la solicitud de equipo.',
                });
            }

            const updatedRequest = await TeamRequest.updateTeamRequestStatus(
                id,
                status,
            );

            if (!updatedRequest) {
                return res.status(404).json({
                    message: 'Solicitud de equipo no encontrada.',
                });
            } else if (updatedRequest.affectedRows === 0) {
                return res.status(500).json({
                    message:
                        'No se pudo actualizar el estado de la solicitud de equipo.',
                });
            } else {
                return res.status(200).json({
                    message:
                        'Estado de la solicitud de equipo actualizado exitosamente.',
                    updatedRequest,
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message:
                    'Error al actualizar el estado de la solicitud de equipo.',
            });
        }
    },
};

export default teamRequestController;
