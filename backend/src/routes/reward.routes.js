import { Router } from 'express';
import { getRewards, redeemUserReward, getUserRewardHistory } from '../controllers/reward.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

// Public routes
router.get('/', getRewards); // Get all active rewards

// Protected routes
router.post('/redeem', authenticate, redeemUserReward); // Redeem a reward
router.get('/my', authenticate, getUserRewardHistory); // Get user's reward history

export default router;