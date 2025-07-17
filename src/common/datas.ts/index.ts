import { StatusType } from "../../components/AppTable";

export const colorMap: Record<StatusType, string> = {
  Unpaid: '#F93232',
  Pending: '#877615',
  Paid: '#37BD57',
  Active: '#4CAF50',
  Inactive: '#9E9E9E',
  Intransit: '#11B0FF',
  Delivered: '#37BD57',
  Cancelled: '#F93232',
  Scheduled: '#FF9800',
  Ongoing: '#11B0FF',
  New: '#877615',
  Completed: '#37BD57',
  Suspended: '#9E9E9E',
  Dispute: '#877615',
  Accepted: '#4CAF50',
  All: '#9E9E9E',
  Deactivated: '#F93232',
};