
// Activity log types
type ActivityType = 'page_visit' | 'certificate_generation' | 'certificate_download' | 'photo_upload' | 'social_certificate';

// Activity log interface
interface ActivityLog {
  id?: string;
  type: ActivityType;
  user: string;
  timestamp: string;
  details: Record<string, any>;
}

// In-memory store for activities (in a real app, this would be a database)
let activityLogs: ActivityLog[] = [];

// Function to add a new activity log
export const addActivityLog = (activity: ActivityLog): void => {
  const newActivity = {
    ...activity,
    id: crypto.randomUUID(),
  };
  
  activityLogs = [newActivity, ...activityLogs];
  
  // Optional: Limit the size of the in-memory store
  if (activityLogs.length > 1000) {
    activityLogs = activityLogs.slice(0, 1000);
  }
  
  // Notify any listeners about the new activity
  window.dispatchEvent(new CustomEvent('activity-log-updated'));
  
  console.log('Activity logged:', newActivity);
};

// Function to get all activity logs
export const getActivityLogs = (): ActivityLog[] => {
  return [...activityLogs];
};

// Function to get filtered activity logs
export const getFilteredActivityLogs = (type?: ActivityType): ActivityLog[] => {
  if (!type) return getActivityLogs();
  return activityLogs.filter(log => log.type === type);
};

// Function to clear all activity logs (admin only)
export const clearActivityLogs = (): void => {
  activityLogs = [];
  window.dispatchEvent(new CustomEvent('activity-log-updated'));
};

// Page visit tracking function to be called on each page
export const trackPageVisit = (page: string): void => {
  addActivityLog({
    type: 'page_visit',
    user: 'Anonymous Visitor',
    timestamp: new Date().toISOString(),
    details: { page }
  });
};
