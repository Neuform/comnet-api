/**
 * CREATE COMMUNITY 
 * UPDATE ADDRESS
 * UPDATE ADMIN 
 * UPDATE DESCRIPTION 
 * DELETE COMMUNITY
 * UPDATE PROFILE IMAGE
 * GET ALL COMMUNITY MEMBERS
 * GET COMMUNITY BY ID
 */
const communityService = require("../services/community.service");


const createCommunityController = async (req, res) => {
    try {
        console.log("createCommunityController");
        const result = await communityService.createCommunityService(req.body);
        if (!result) {
            res.status(404).send({
                success: false,
                message: "Invalid/Incomplete community details",
                result
            })
        }
        return res.status(200).send({
            success: true,
            message: "Community created successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

const updateAddressCommunityController = async (req, res) => {
    try {
        console.log("updateAddressCommunityController");
        const { id } = req.params;
        const result = await communityService.updateAddressCommunityService(id, req.body);
        res.status(200).send({
            success: true,
            message: "Address updated successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const updateAdminCommunityController = async (req, res) => {
    try {
        console.log("updateAdminCommunityController");
        const { id } = req.params;
        const { admin } = req.body;
        console.log(id);
        console.log(admin);
        const isAlreadyAdmin = await communityService.isAlreadyAdmin(id,admin);
        console.log(isAlreadyAdmin)
        if (!isAlreadyAdmin) {
            const result = await communityService.updateAdminCommunityService(id, admin);
            return res.status(200).send({
                success: true,
                message: "Admin updated properly",
                result
            })
        }
        return res.status(200).send({ success:true,message: "user is Already an admin", isAlreadyAdmin });

    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const updateDescriptionCommunityController = async (req, res) => {
    try {
        console.log("updateDescriptionCommunityController");
        const { id } = req.params
        const result = await communityService.updateDescriptionCommunityService(id, req.body);
        res.status(200).send({
            success: true,
            message: "Description updated successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const deleteCommunityController = async (req, res) => {
    try {
        console.log("deleteCommunityController");
        const { id } = req.params
        const result = await communityService.deleteCommunityService(id);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Invalid community Id"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Community delete successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const updateProfileImageCommunityController = async (req, res) => {
    try {
        console.log("updateProfileImageCommunityController");
        const { id } = req.params;
        const result = await communityService.updateProfileImageCommunityService(id, req.body);
        res.status(200).send({
            success: true,
            message: "Profile Image updated successfully",
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }

}


const getAllMemberCommunityController = async (req, res) => {
    try {
        console.log("getAllMemberCommunityController");
        const { id } = req.params
        const result = await communityService.getAllMemberCommunityService(id);
        res.status(200).send({
            success: true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}


const getByIdCommunityController = async (req, res) => {
    try {
        console.log("getByIdCommunityController");
        const {id} = req.params;
        const result = await communityService.getByIdCommunityService(id);
        if(!result){
            return res.status(404).send({
                success:false,
                message:"Invalid community Id",
                result
            })
        }
        return res.status(200).send({
            success:true,
            result
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            error: error.message
        })
    }
}

module.exports = { createCommunityController, updateAddressCommunityController, updateAdminCommunityController, updateDescriptionCommunityController, deleteCommunityController, updateProfileImageCommunityController, getAllMemberCommunityController, getByIdCommunityController };