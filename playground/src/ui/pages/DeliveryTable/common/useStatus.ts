export const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "scheduled":
      return {
        backgroundColor: "#FEF4AD",
        color: "#6F6D07"
      };
    case "in transit":
      return {
        backgroundColor: "#B6EBFD",
        color: "#076883"
      };
    case "completed":
      return {
        backgroundColor: "#CEFFA3",
        color: "#0E7D23"
      };
      case "canceled":
      return {
        backgroundColor: "#FFA6A3",
        color: "#7D0E0E"
      };
    default:
      return {
        backgroundColor: "#F0F0F0",
        color: "#615D5D"
      };
  }
};

export const useDetailsStatus = (status: string) => {
  switch (status.toLowerCase()) {
    case "scheduled":
      return {
        color: "#6F6D07"
      };
    case "in transit":
      return {
        color: "#076883"
      };
    case "completed":
      return {
        color: "#0E7D23"
      };
    case "canceled":
      return {
        color: "#7D0E0E"
      };
    default:
      return {
        color: "#615D5D"
      };
  }
}


export const transanctionStatus = (status: string) => {
  switch (status) {
    case 'successful':
      return {
        color: '#0B671C',
        backgroundColor: '#D2FFAB'
      };
    case 'failed':
      return {
        color: '#F93232',
        backgroundColor: '#FFDADA'
      };
    case 'refunded':
      return {
        color: '#192E38',
        backgroundColor: '#CDEFFF'
      };
    default:
      return {
        color: '#6B7280',
        backgroundColor: '#F3F4F6'
      };
  }
};