/**
 * CREATE
 * :ID/ADDRESS/UPDATE
 * :ID/ADMIN/UPDATE
 * :ID/DESCRIPTION/UPDATE
 * :ID/DELETE
 * :ID/PROFILE/UPDATE
 * :ID/MEMEBERS/ALL
 * :ID
 */

const express = require('express')
const router = express.Router()
const authMiddleware = require("../middlerware/auth.middleware");
const communityController = require("../controller/community.controller");
router.post("/create",authMiddleware.authenticate,communityController.createCommunityController);
router.put("/:id/address/update",authMiddleware.authenticate,communityController.updateAddressCommunityController);
router.put("/:id/admin/update",authMiddleware.authenticate,communityController.updateAdminCommunityController);
router.put("/:id/description/update",authMiddleware.authenticate,communityController.updateDescriptionCommunityController);
router.delete("/:id/delete",authMiddleware.authenticate,communityController.deleteCommunityController);
router.put("/:id/profile/update",authMiddleware.authenticate,communityController.updateProfileImageCommunityController);
router.get("/:id/member/all",authMiddleware.authenticate,communityController.getAllMemberCommunityController);
router.get("/:id",authMiddleware.authenticate,communityController.getByIdCommunityController);
module.exports = router;

