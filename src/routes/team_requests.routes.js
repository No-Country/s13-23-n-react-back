import { Router } from 'express';

import teamRequestController from '../controllers/team_request_controller.js';

const router = Router();

router.get('/getAll/:id', teamRequestController.getAllTeamRequests);
router.get('/:id', teamRequestController.getTeamRequestById);
router.post('/create', teamRequestController.createTeamRequest);
router.put('/updateStatus/:id', teamRequestController.updateTeamRequestStatus);

export default router;
