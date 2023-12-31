import mongoose from 'mongoose';
import Lecturer from './lecturerModel.js';

const courseSchema = new mongoose.Schema({
  poster: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  evaluationPoint: {
    type: Number,
    default: 0
  },
  numberOfStudent: {
    type: Number,
    default: 0
  },
  numberOfView: {
    type: Number,
    default: 0
  },
  tuition: {
    type: Number,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  previewIndex: {
    type: [Number],
    default: []
  },
  whatYoullLearn: {
    type: [String],
    default: []
  },
  name: {
    type: String,
    required: true
  },
  idCourseTopic: {
    type: mongoose.Schema.Types.ObjectId
  },
  idLecturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecturer',
    required: true
  },
  videos: [{
    name: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  }],
  userEvaluations: [{
    type: mongoose.Schema.Types.ObjectId,
  }],
  numberOfVideo: {
    type: Number,
    default: 0
  },
  userReviews: [{
    type: mongoose.Schema.Types.ObjectId,
  }]
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

