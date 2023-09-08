const Job = require('../models/Job');
const {StatusCodes} = require('http-status-codes');
const getAllJobs = (req, res) => {
   res.send("Get all Jobs") 
}

const getJob = (req,res) => {
  res.send("Get Job")  
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
