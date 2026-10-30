/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. yarn codegen */

export interface AdminModeratorTaskResponse {
  context?: any;
  createdAt?: string;
  id?: number;
  requestingUser?: ModelsUser;
  requestingUserID?: number;
  resolution?: ModelsModeratorTaskResolution;
  resolvedAt?: string;
  resolvedByUser?: ModelsUser;
  resolvedByUserID?: number;
  taskFields?: Record<string, any>;
  taskReference?: string;
  taskType?: ModelsModeratorTaskType;
  updatedAt?: string;
}

export interface AdminResolveTasksBody {
  resolution: any;
}

export interface AuthAuthResponse {
  expire?: string;
  token?: string;
}

export interface AutocompleteACEntry {
  id?: number;
  type?: string;
  value?: string;
}

export interface BannerBanner {
  link?: string;
  sub?: string;
  text?: string;
  type?: string;
  visible?: boolean;
}

export interface BooktrakCreateBookListingParams {
  bookID: number;
  condition?: any;
  description?: string;
  listingType: any;
}

export interface BooktrakCreateBookParams {
  isbn: string;
}

export interface BooktrakUpdateBookCoursesParams {
  courseIDs: Array<number>;
}

export interface BulletinCreateBulletinParams {
  body: string;
  endDate?: string;
  offer?: boolean;
  startDate?: string;
  title: string;
  type: string;
}

export interface BulletinCreateDiscussionParams {
  content: string;
  title: string;
}

export interface BulletinCreatePostParams {
  content: string;
  discussionID: number;
}

export interface BulletinCreateRideParams {
  body: string;
  date: string;
  destination: string;
  offer?: boolean;
  source: string;
}

export interface BulletinUpdateBulletinParams {
  body?: string;
  endDate?: string;
  offer?: boolean;
  startDate?: string;
  title?: string;
}

export interface BulletinUpdatePostParams {
  content?: string;
}

export interface BulletinUpdateRideParams {
  body?: string;
  date?: string;
  offer?: boolean;
}

export interface CourseschedulerCourseSelectionsString {
  courses?: string;
}

export interface DormtrakDormRoomPhotoInfo {
  dormRoomId?: number;
  name?: string;
  number?: number;
  reviewId?: number;
}

export interface DormtrakReviewCreateParams {
  bathroomDesc?: string;
  bedAdjustable?: boolean;
  closet?: string;
  comment?: string;
  commonRoomAccess?: boolean;
  commonRoomDesc?: string;
  dormRoomID: number;
  flooring?: string;
  keyOrCard?: string;
  location?: number;
  loudness?: number;
  noise?: string;
  privateBathroom?: boolean;
  satisfaction?: number;
  thermostatAccess?: boolean;
  wifi?: number;
}

export interface DormtrakReviewUpdateParams {
  bathroomDesc?: string;
  bedAdjustable?: boolean;
  closet?: string;
  comment?: string;
  commonRoomAccess?: boolean;
  commonRoomDesc?: string;
  flooring?: string;
  keyOrCard?: string;
  location?: number;
  loudness?: number;
  noise?: string;
  privateBathroom?: boolean;
  satisfaction?: number;
  thermostatAccess?: boolean;
  wifi?: number;
}

export interface EphmatchCountMatchesResponse {
  total?: number;
  unseen?: number;
}

export interface EphmatchGetAvailabilityResp {
  available?: boolean;
  closingTime?: string;
  nextOpenTime?: string;
  openIndefinitely?: boolean;
  seniorOnly?: boolean;
}

export interface EphmatchProfileCreateParams {
  LocationCountry?: string;
  description?: string;
  locationState?: string;
  locationTown?: string;
  locationVisible?: boolean;
  lookingFor?: string;
  matchMessage?: string;
  messagingPlatform?: string;
  messagingUsername?: string;
}

export interface EphmatchProfileUpdateParams {
  description?: string;
  locationCountry?: string;
  locationState?: string;
  locationTown?: string;
  locationVisible?: boolean;
  lookingFor?: string;
  matchMessage?: string;
  messagingPlatform?: string;
  messagingUsername?: string;
}

export interface EphmatchSetProfileRelationParams {
  relation?: string;
}

export interface EphmatchSetProfileRelationResp {
  matched?: boolean;
}

export interface FactrakAgreementCreateParams {
  agree?: boolean;
}

export interface FactrakAgreementUpdateParams {
  agree?: boolean;
}

export interface FactrakSurveyCreateParams {
  approachability?: number;
  areaOfStudyAbbreviation?: string;
  comment: string;
  courseFormat?: string;
  courseID?: number;
  courseNumber?: string;
  courseStimulating?: number;
  courseWorkload?: number;
  gradeReceived?: string;
  leadLecture?: number;
  mentalHealthSupport?: number;
  outsideHelpfulness?: number;
  professorID: number;
  promoteDiscussion?: number;
  semesterSeason?: string;
  semesterYear?: number;
  wouldRecommendCourse?: boolean;
  wouldTakeAnother?: boolean;
}

export interface FactrakSurveyUpdateParams {
  approachability?: number;
  comment?: string;
  courseFormat?: string;
  courseStimulating?: number;
  courseWorkload?: number;
  gradeReceived?: string;
  leadLecture?: number;
  mentalHealthSupport?: number;
  outsideHelpfulness?: number;
  promoteDiscussion?: number;
  semesterSeason?: string;
  semesterYear?: number;
  wouldRecommendCourse?: boolean;
  wouldTakeAnother?: boolean;
}

export interface FeedbackCreateFeedbackParams {
  notes: string;
  preferredName?: string;
  url?: string;
  userID?: number;
}

export interface FeedbackUpdateFeedbackParams {
  adminNotes?: string;
  issue?: string;
  priority?: ModelsFeedbackPriority;
}

export interface GoodrichCreateOrderParams {
  comboDeal?: boolean;
  date?: string;
  idNumber?: string;
  items?: Array<ModelsGoodrichOrderItem>;
  leaseID?: string;
  notes?: string;
  paymentMethod?: ModelsGoodrichPaymentMethod;
  phoneNumber?: string;
  timeSlot?: string;
}

export interface GoodrichOrderLease {
  expiry?: string;
  id?: string;
}

export interface GoodrichTimeSlot {
  closedSpots?: number;
  formatted?: string;
  hour?: number;
  minute?: number;
  openSpots?: number;
}

export interface GoodrichUpdateMenuItemParams {
  available?: boolean;
  quantity?: number;
  quantityLimit?: boolean;
}

export interface GoodrichUpdateOrderParams {
  adminNotes?: string;
  status?: ModelsGoodrichOrderStatus;
}

export interface IdentityCredentials {
  localIP?: boolean;
  password?: string;
  unixID?: string;
  useIP?: boolean;
}

export interface ModelsAreaOfStudy {
  abbreviation?: string;
  courses?: Array<ModelsCourse>;
  department?: ModelsDepartment;
  departmentID?: number;
  id?: number;
  name?: string;
  professors?: Array<ModelsUser>;
}

export interface ModelsBannedUser {
  bulletinRead?: boolean;
  bulletinWrite?: boolean;
  dormtrak?: boolean;
  ephcatch?: boolean;
  ephmatch?: boolean;
  factrak?: boolean;
  id?: number;
  reason?: string;
  user?: any;
  userID?: number;
}

export interface ModelsBook {
  authors?: Array<string>;
  bookListings?: Array<ModelsBookListing>;
  courses?: Array<ModelsCourse>;
  id?: number;
  imageLink?: string;
  infoLink?: string;
  isbn13?: string;
  publisher?: string;
  subtitle?: string;
  title?: string;
}

export interface ModelsBookListing {
  book?: ModelsBook;
  bookID?: number;
  condition?: any;
  description?: string;
  id?: number;
  listingType?: any;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsBulletin {
  body?: string;
  endDate?: string;
  id?: number;
  offer?: boolean;
  startDate?: string;
  title?: string;
  type?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsBulletinRide {
  body?: string;
  date?: string;
  destination?: string;
  id?: number;
  offer?: boolean;
  source?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsCondition {
  [key: string]: any;
}

export interface ModelsCourse {
  areaOfStudy?: ModelsAreaOfStudy;
  areaOfStudyID?: number;
  books?: Array<ModelsBook>;
  factrakScore?: number;
  factrakSurveys?: Array<ModelsFactrakSurvey>;
  id?: number;
  number?: string;
  professors?: Array<ModelsUser>;
}

export interface ModelsDepartment {
  areasOfStudy?: Array<ModelsAreaOfStudy>;
  id?: number;
  name?: string;
  users?: Array<ModelsUser>;
}

export interface ModelsDiscussion {
  createdTime?: string;
  exUserName?: string;
  id?: number;
  lastActive?: string;
  posts?: Array<ModelsPost>;
  title?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsDorm {
  averageDoubleArea?: number;
  averageSingleArea?: number;
  bathroomRatio?: number;
  built?: number;
  capacity?: number;
  description?: string;
  dormRooms?: Array<ModelsDormRoom>;
  id?: number;
  keyOrCard?: string;
  location?: number;
  loudness?: number;
  modeDoubleArea?: number;
  modeSingleArea?: number;
  name?: string;
  neighborhood?: ModelsNeighborhood;
  neighborhoodID?: number;
  numberBathrooms?: number;
  numberDoubles?: number;
  numberFlex?: number;
  numberSingles?: number;
  numberWashers?: number;
  satisfaction?: number;
  wifi?: number;
}

export interface ModelsDormFacts {
  averageDoublesArea?: number;
  averageLocation?: number;
  averageLoudness?: number;
  averageSatisfaction?: number;
  averageSinglesArea?: number;
  averageWifi?: number;
  biggestDouble?: ModelsDormRoom;
  biggestSingle?: ModelsDormRoom;
  capacity?: number;
  commonRoomAccessRatio?: number;
  doublesCount?: number;
  flexCount?: number;
  juniorCount?: number;
  keyOrCard?: string;
  modeDoublesArea?: number;
  modeSinglesArea?: number;
  seniorCount?: number;
  singlesCount?: number;
  smallestDouble?: ModelsDormRoom;
  smallestSingle?: ModelsDormRoom;
  sophomoreCount?: number;
  studentToBathroomRatio?: number;
  washersCount?: number;
}

export interface ModelsDormRoom {
  area?: number;
  bathroomDesc?: string;
  bedAdjustable?: boolean;
  closet?: string;
  commonRoomAccess?: boolean;
  commonRoomDesc?: string;
  dorm?: ModelsDorm;
  dormID?: number;
  dormtrakReviews?: Array<ModelsDormtrakReview>;
  faces?: string;
  floorNumber?: number;
  flooring?: string;
  hc?: boolean;
  id?: number;
  keyOrCard?: string;
  noise?: string;
  number?: string;
  picture?: string;
  privateBathroom?: boolean;
  roomType?: string;
  thermostatAccess?: boolean;
  users?: Array<ModelsUser>;
  walkthrough?: boolean;
}

export interface ModelsDormtrakRanking {
  bestLocation?: Array<ModelsDorm>;
  bestSatisfaction?: Array<ModelsDorm>;
  bestWifi?: Array<ModelsDorm>;
  biggestDoubles?: Array<ModelsDormRoom>;
  biggestSingles?: Array<ModelsDormRoom>;
  fewestBathrooms?: Array<ModelsDorm>;
  leastLoudness?: Array<ModelsDorm>;
  maxMeanDoubleSize?: Array<ModelsDorm>;
  maxMeanSingleSize?: Array<ModelsDorm>;
  minMeanDoubleSize?: Array<ModelsDorm>;
  minMeanSingleSize?: Array<ModelsDorm>;
  mostBathrooms?: Array<ModelsDorm>;
  mostDoubles?: Array<ModelsDorm>;
  mostLoudness?: Array<ModelsDorm>;
  mostSingles?: Array<ModelsDorm>;
  smallestDoubles?: Array<ModelsDormRoom>;
  smallestSingles?: Array<ModelsDormRoom>;
  worstLocation?: Array<ModelsDorm>;
  worstSatisfaction?: Array<ModelsDorm>;
  worstWifi?: Array<ModelsDorm>;
}

export interface ModelsDormtrakReview {
  bathroomDesc?: string;
  bedAdjustable?: boolean;
  closet?: string;
  comment?: string;
  commonRoomAccess?: boolean;
  commonRoomDesc?: string;
  createdTime?: string;
  dormRoom?: ModelsDormRoom;
  dormRoomID?: number;
  flooring?: string;
  id?: number;
  keyOrCard?: string;
  location?: number;
  loudness?: number;
  noise?: string;
  privateBathroom?: boolean;
  satisfaction?: number;
  thermostatAccess?: boolean;
  user?: ModelsUser;
  userID?: number;
  wifi?: number;
}

export interface ModelsEphcatch {
  createdTime?: string;
  id?: number;
  other?: any;
  otherID?: number;
  seen?: boolean;
  user?: any;
  userID?: number;
}

export interface ModelsEphcatcher {
  id?: number;
  liked?: boolean;
  name?: string;
  unixID?: string;
}

export interface ModelsEphmatchProfile {
  deleted?: boolean;
  description?: string;
  id?: number;
  locationCountry?: string;
  locationState?: string;
  locationTown?: string;
  locationVisible?: boolean;
  lookingFor?: string;
  matchMessage?: string;
  matched?: boolean;
  messagingPlatform?: string;
  messagingUsername?: string;
  relation?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsFactrakAgreement {
  agrees?: boolean;
  factrakSurvey?: ModelsFactrakSurvey;
  factrakSurveyID?: number;
  id?: number;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsFactrakSurvey {
  agreements?: Array<ModelsFactrakAgreement>;
  approachability?: number;
  clientAgreement?: boolean;
  comment?: string;
  course?: ModelsCourse;
  courseFormat?: string;
  courseID?: number;
  courseStimulating?: number;
  courseWorkload?: number;
  createdTime?: string;
  flagged?: boolean;
  gradeReceived?: string;
  id?: number;
  leadLecture?: number;
  mentalHealthSupport?: number;
  outsideHelpfulness?: number;
  professor?: ModelsUser;
  professorID?: number;
  promoteDiscussion?: number;
  semesterSeason?: string;
  semesterYear?: number;
  totalAgree?: number;
  totalDisagree?: number;
  user?: ModelsUser;
  userID?: number;
  wouldRecommendCourse?: boolean;
  wouldTakeAnother?: boolean;
}

export interface ModelsFactrakSurveyAvgRatings {
  avgApproachability?: number;
  avgCourseStimulating?: number;
  avgCourseWorkload?: number;
  avgLeadLecture?: number;
  avgMentalHealthSupport?: number;
  avgOutsideHelpfulness?: number;
  avgPromoteDiscussion?: number;
  avgWouldRecommendCourse?: number;
  avgWouldTakeAnother?: number;
  numApproachability?: number;
  numCourseStimulating?: number;
  numCourseWorkload?: number;
  numLeadLecture?: number;
  numMentalHealthSupport?: number;
  numOutsideHelpfulness?: number;
  numPromoteDiscussion?: number;
  numWouldRecommendCourse?: number;
  numWouldTakeAnother?: number;
}

export interface ModelsFeedback {
  adminNotes?: string;
  id?: number;
  issue?: string;
  notes?: string;
  preferredName?: string;
  priority?: any;
  url?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsFeedbackPriority {
  [key: string]: any;
}

export interface ModelsGoodrichMenuItem {
  available?: boolean;
  category?: string;
  description?: string;
  id?: number;
  price?: number;
  quantity?: number;
  quantityLimit?: boolean;
  title?: string;
  type?: string;
}

export interface ModelsGoodrichOrder {
  adminNotes?: string;
  comboDeal?: boolean;
  date?: string;
  id?: number;
  idNumber?: string;
  items?: Array<ModelsGoodrichOrderItem>;
  notes?: string;
  paymentMethod?: ModelsGoodrichPaymentMethod;
  phoneNumber?: string;
  status?: ModelsGoodrichOrderStatus;
  timeSlot?: string;
  totalPrice?: number;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsGoodrichOrderItem {
  id?: number;
  item?: ModelsGoodrichMenuItem;
  note?: string;
}

export interface ModelsGoodrichOrderStatus {
  [key: string]: any;
}

export interface ModelsGoodrichPaymentMethod {
  [key: string]: any;
}

export interface ModelsListingType {
  [key: string]: any;
}

export interface ModelsModeratorTaskResolution {
  [key: string]: any;
}

export interface ModelsModeratorTaskType {
  [key: string]: any;
}

export interface ModelsNeighborhood {
  dorms?: Array<ModelsDorm>;
  id?: number;
  name?: string;
  trakked?: boolean;
}

export interface ModelsNeighborhoodFacts {
  juniorCount?: number;
  seniorCount?: number;
  sophomoreCount?: number;
}

export interface ModelsNotificationSettings {
  enableNotifications?: boolean;
  id?: number;
  salmonNotify?: boolean;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsNotificationToken {
  id?: number;
  token?: string;
  type?: string;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsOffice {
  id?: number;
  number?: string;
  users?: Array<ModelsUser>;
}

export interface ModelsPost {
  content?: string;
  createdTime?: string;
  discussion?: ModelsDiscussion;
  discussionID?: number;
  exUserName?: string;
  id?: number;
  user?: ModelsUser;
  userID?: number;
}

export interface ModelsTag {
  id?: number;
  name?: string;
  users?: Array<ModelsUser>;
}

export interface ModelsUser {
  admin?: boolean;
  areasOfStudy?: Array<ModelsAreaOfStudy>;
  atWilliams?: boolean;
  bannedUser?: any;
  campusPhoneEXT?: string;
  campusStatus?: string;
  cellPhone?: string;
  classYear?: number;
  department?: ModelsDepartment;
  departmentID?: number;
  dormRoom?: ModelsDormRoom;
  dormRoomID?: number;
  dormVisible?: boolean;
  dormtrakReviews?: Array<ModelsDormtrakReview>;
  entry?: string;
  ephcatchEligibility?: boolean;
  ephcatches?: Array<ModelsEphcatch>;
  ephmatchProfile?: any;
  factrakAdmin?: boolean;
  factrakAgreements?: Array<ModelsFactrakAgreement>;
  factrakScore?: number;
  factrakSurveyDeficit?: number;
  factrakSurveys?: Array<ModelsFactrakSurvey>;
  hasAcceptedDormtrakPolicy?: boolean;
  hasAcceptedFactrakPolicy?: boolean;
  homeCountry?: string;
  homePhone?: string;
  homeState?: string;
  homeTown?: string;
  homeVisible?: boolean;
  homeZip?: string;
  id?: number;
  major?: string;
  name?: string;
  nickname?: string;
  notificationSettings?: any;
  notificationTokens?: Array<ModelsNotificationToken>;
  offCampus?: boolean;
  offCycle?: boolean;
  office?: ModelsOffice;
  officeID?: number;
  onCampusSemester?: number;
  optOutEphcatch?: boolean;
  pronoun?: string;
  pronounOverride?: string;
  suBox?: string;
  tags?: Array<ModelsTag>;
  title?: string;
  type?: string;
  unixID?: string;
  visible?: boolean;
  williamsEmail?: string;
  williamsID?: string;
}

export interface NotificationSettingsUpdateParams {
  enableNotifications?: boolean;
  salmonNotify?: boolean;
}

export interface NotificationTokenCreateParams {
  token?: string;
  type?: string;
}

export interface OldAuthResponse {
  expire?: string;
  token?: string;
}

export interface OldLoginParams {
  localIP?: boolean;
  password?: string;
  unixID?: string;
  useIP?: boolean;
}

export interface ResponsesGetUserResponseDepartment {
  id?: number;
  name?: string;
}

export interface ResponsesGetUserResponseDorm {
  id?: number;
  name?: string;
  neighborhoodID?: number;
}

export interface ResponsesGetUserResponseDormRoom {
  dorm?: ResponsesGetUserResponseDorm;
  dormID?: number;
  id?: number;
  number?: string;
  roomType?: string;
}

export interface ResponsesGetUserResponseOffice {
  id?: number;
  number?: string;
}

export interface ResponsesGetUserResponseTag {
  id?: number;
  name?: string;
}

export interface ResponsesGetUserResponseUser {
  admin?: boolean;
  atWilliams?: boolean;
  campusPhoneEXT?: string;
  campusStatus?: string;
  cellPhone?: string;
  classYear?: number;
  department?: ResponsesGetUserResponseDepartment;
  departmentID?: number;
  dormRoom?: ResponsesGetUserResponseDormRoom;
  dormRoomID?: number;
  dormVisible?: boolean;
  entry?: string;
  ephcatchEligibility?: boolean;
  factrakAdmin?: boolean;
  factrakSurveyDeficit?: number;
  hasAcceptedDormtrakPolicy?: boolean;
  hasAcceptedFactrakPolicy?: boolean;
  homeCountry?: string;
  homePhone?: string;
  homeState?: string;
  homeTown?: string;
  homeVisible?: boolean;
  homeZip?: string;
  id?: number;
  major?: string;
  name?: string;
  offCampus?: boolean;
  offCycle?: boolean;
  office?: ResponsesGetUserResponseOffice;
  officeID?: number;
  optOutEphcatch?: boolean;
  pronoun?: string;
  pronounOverride?: string;
  suBox?: string;
  tags?: Array<ResponsesGetUserResponseTag>;
  title?: string;
  type?: string;
  unixID?: string;
  visible?: boolean;
  williamsEmail?: string;
  williamsID?: string;
}

export interface ResponsesListMatchesResponseEphmatchMatch {
  createdAt?: string;
  id?: number;
  matchedUser?: ResponsesListMatchesResponseMatchedUser;
  matchedUserID?: number;
  seenByMatchedUser?: boolean;
  seenBySelf?: boolean;
  updatedAt?: string;
}

export interface ResponsesListMatchesResponseEphmatchProfile {
  description?: string;
  locationCountry?: string;
  locationState?: string;
  locationTown?: string;
  locationVisible?: boolean;
  lookingFor?: string;
  matchMessage?: string;
  messagingPlatform?: string;
  messagingUsername?: string;
}

export interface ResponsesListMatchesResponseMatchedUser {
  classYear?: number;
  entry?: string;
  ephmatchProfile?: ResponsesListMatchesResponseEphmatchProfile;
  id?: number;
  major?: string;
  name?: string;
  nickname?: string;
  offCycle?: boolean;
  pronoun?: string;
  tags?: Array<ResponsesListMatchesResponseTag>;
  title?: string;
  unixID?: string;
  williamsEmail?: string;
}

export interface ResponsesListMatchesResponseTag {
  id?: number;
  name?: string;
}

export interface ResponsesListUsersResponseDepartment {
  id?: number;
  name?: string;
}

export interface ResponsesListUsersResponseDorm {
  id?: number;
  name?: string;
  neighborhoodID?: number;
}

export interface ResponsesListUsersResponseDormRoom {
  dorm?: ResponsesListUsersResponseDorm;
  dormID?: number;
  id?: number;
  number?: string;
  roomType?: string;
}

export interface ResponsesListUsersResponseOffice {
  id?: number;
  number?: string;
}

export interface ResponsesListUsersResponseTag {
  id?: number;
  name?: string;
}

export interface ResponsesListUsersResponseUser {
  admin?: boolean;
  atWilliams?: boolean;
  campusPhoneEXT?: string;
  campusStatus?: string;
  cellPhone?: string;
  classYear?: number;
  department?: ResponsesListUsersResponseDepartment;
  departmentID?: number;
  dormRoom?: ResponsesListUsersResponseDormRoom;
  dormRoomID?: number;
  dormVisible?: boolean;
  entry?: string;
  ephcatchEligibility?: boolean;
  factrakAdmin?: boolean;
  factrakSurveyDeficit?: number;
  hasAcceptedDormtrakPolicy?: boolean;
  hasAcceptedFactrakPolicy?: boolean;
  homeCountry?: string;
  homePhone?: string;
  homeState?: string;
  homeTown?: string;
  homeVisible?: boolean;
  homeZip?: string;
  id?: number;
  major?: string;
  name?: string;
  offCampus?: boolean;
  offCycle?: boolean;
  office?: ResponsesListUsersResponseOffice;
  officeID?: number;
  optOutEphcatch?: boolean;
  pronoun?: string;
  pronounOverride?: string;
  suBox?: string;
  tags?: Array<ResponsesListUsersResponseTag>;
  title?: string;
  type?: string;
  unixID?: string;
  visible?: boolean;
  williamsEmail?: string;
  williamsID?: string;
}

export interface ServerHealthCheckResponse {
  ok?: boolean;
}

export interface ServicesBaseErrorResponse {
  error?: ServicesRespError;
  status?: number;
  updateToken?: boolean;
}

export interface ServicesRespError {
  errorCode?: number;
  errors?: Array<string>;
  message?: string;
}

export interface UserCreateTagRequestParams {
  tagName: string;
}

export interface UserUpdateUserParams {
  campusStatus?: string;
  dormVisible?: boolean;
  hasAcceptedDormtrakPolicy?: boolean;
  hasAcceptedFactrakPolicy?: boolean;
  homeVisible?: boolean;
  nickname?: string;
  offCycle?: boolean;
  optOutEphcatch?: boolean;
  pronounOverride?: string;
  visible?: boolean;
}

export interface UserUpdateUserTagsParams {
  tags?: Array<string>;
}

/** @deprecated alias for CourseschedulerCourseSelectionsString */
export type ModelsCourseSelectionString = CourseschedulerCourseSelectionsString;

export interface CourseSelectionSetRequest {
  courses?: string;
}

export namespace BooktrakCreateBookListingParams {
  export enum ConditionEnum {
    Empty = '',
    POOR = 'POOR',
    FAIR = 'FAIR',
    GOOD = 'GOOD',
    VERYGOOD = 'VERY_GOOD',
    LIKENEW = 'LIKE_NEW',
    NEW = 'NEW',
  }
  export enum ListingTypeEnum {
    Empty = '',
    BUY = 'BUY',
    SELL = 'SELL',
  }
}

export namespace ModelsBookListing {
  export enum ConditionEnum {
    Empty = '',
    POOR = 'POOR',
    FAIR = 'FAIR',
    GOOD = 'GOOD',
    VERYGOOD = 'VERY_GOOD',
    LIKENEW = 'LIKE_NEW',
    NEW = 'NEW',
  }
  export enum ListingTypeEnum {
    Empty = '',
    BUY = 'BUY',
    SELL = 'SELL',
  }
}
