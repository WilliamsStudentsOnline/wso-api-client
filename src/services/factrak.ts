export { FactrakService } from '../generated/services/factrak';

/** Client-side metric query values (not in OpenAPI). */
export enum FactrakProfessorMetric {
  Approachability = 'approachability',
  CourseWorkload = 'course_workload',
  LeadLecture = 'lead_lecture',
  OutsideHelpfulness = 'outside_helpfulness',
  PromoteDiscussion = 'promote_discussion',
  WouldTakeAnother = 'would_take_another',
  CourseStimulating = 'course_stimulating',
}

export enum FactrakCourseMetric {
  WouldRecommendCourse = 'would_recommend_course',
  CourseWorkload = 'course_workload',
  CourseStimulating = 'course_stimulating',
}
