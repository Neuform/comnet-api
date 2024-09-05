/**
 * CREATE 
 * UPDATE ADDRESS
 * UPDATE ADMIN =>Multiple admin or single, also why admin field => type: string{instead - userId}
 * UPDATE DESCRIPTION 
 * DELETE
 * UPDATE PROFILE IMAGE
 * GET ALL COMMUNITY MEMBERS
 * GET COMMUNITY BY ID
 */

const Community = require("../models/community.model");

const createCommunityService = async (body)=>{
    console.log("createCommunityService");
    console.log("body: ",body);
    const result = new Community({...body});
    const savedResult = await result.save();
    return savedResult
}
const updateAddressCommunityService = async (communityId,newAddress)=>{
    console.log("updateAddressCommunityService");
    console.log("communityId:",communityId);
    console.log("new address: ",newAddress);
    const {address} = newAddress;
    const result = await Community.findByIdAndUpdate(communityId,{address},{new:true});
    return result ;
}
const updateAdminCommunityService = async (communityId,admin)=>{
    console.log("updateAdminCommunityService");
    const result = await Community.findByIdAndUpdate(communityId,{admin},{new:true});
    return result;
}
const updateDescriptionCommunityService = async(communityId,newDescription)=>{
    console.log("updateDescriptionCommunityService");
    const {description} = newDescription;
    console.log("communitId",communityId)
    console.log("description",description)
    const result = await Community.findByIdAndUpdate(communityId,{description},{new:true});
    return result;
}
const deleteCommunityService = async (communityId)=>{
    console.log("deleteCommunityService");
    const result = await Community.findByIdAndDelete(communityId);
    return result;
}
const updateProfileImageCommunityService = async (communityId,newImage)=>{
    console.log("updateProfileImageCommunityService");
    const {image}= newImage;
    const result = await Community.findByIdAndUpdate(communityId,{image},{new:true});
    return result;
}
const getAllMemberCommunityService = async (communityId)=>{
    console.log("getAllMemberCommunityService");
    const result = await Community.findById(communityId,'members');
    return result;
}
const getByIdCommunityService = async (communityId)=>{
    console.log("getByIdCommunityService");
    const result = await Community.findById(communityId);
    return result;
}
const isAlreadyAdmin = async (communityId,userId)=>{
    const result = await Community.findById(communityId,'admin');
    const {admin} = result;
    return admin===userId;
}
module.exports = {createCommunityService,updateAddressCommunityService,updateDescriptionCommunityService,updateAdminCommunityService,deleteCommunityService,updateProfileImageCommunityService,getAllMemberCommunityService,getByIdCommunityService,isAlreadyAdmin };