const Job = require('../models/Job');
const {StatusCodes} = require('http-status-codes');

// Controller for get All jobs
const getAllJobs = async (req, res) => { 
  const jobs = await Job.find({createdBy: req.user.userId}).sort('createdAt')
  res.status(StatusCodes.OK).json({jobs, count: jobs.length})
}

const getJob = async (req,res) => {
  // res.send("Get Job")  
  const {user:{userId},params:{id: jobId}} = req
  
  const job = await Job.findOne({
    _id:jobId,createdBy:userId
  })
  if(!job){
    throw new NotFoundError(`No job with id ${jobId}`)
  }
  res.status(StatusCodes.OK).json(job)
}

const createJob = async (req,res) => {
  // res.send("Create Jobs")
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json(job)
}

const updateJob = (req,res) => {
    res.send("Update Jobs")
}

const deleteJob = (req,res) => {
   res.send("Delete Jobs") 
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}
