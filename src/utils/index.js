// import { Ticket, User } from "../interfaces";


export const groupTicketsByStatus = (tickets) => {
    const predefinedStatuses = ["Backlog", "Todo", "In progress", "Done", "Canceled"];
        const groups = {};

        // Initialize groups with all predefined statuses
        predefinedStatuses.forEach(status => {
            groups[status] = [];
        });

        // Group tickets based on the status
        tickets.forEach(ticket => {
            const key = ticket.status;
            if (groups[key]) {
                groups[key].push(ticket);
            }
        });

    return groups;
};

export const groupTicketsByPriority = (tickets) => {
    const priorityLevels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority"
    };

    const orderedPriority = ["No priority", "Urgent", "High", "Medium", "Low"];
    const groups = {};

    // Initialize groups with predefined priority levels in the required order
    orderedPriority.forEach(level => {
        groups[level] = [];
    });

    // Group tickets based on priority
    tickets.forEach(ticket => {
        const priorityName = priorityLevels[ticket.priority] || "No priority";
        groups[priorityName].push(ticket);
    });

    return groups;
};

export const groupTicketsByUserId = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

export const mapUsersByUserId = (users) => {
    let group = users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
};

const orderByPriority = (tickets) => tickets.sort((a, b) => a.priority > b.priority ? -1 : 1);
const orderByTitle = (tickets) => tickets.sort((a, b) => a.title < b.title ? -1 : 1);

export const loadGrid = (tickets, grouping, ordering) => {
    let orderedTickets;
    if (ordering === "priority")
        orderedTickets = orderByPriority(tickets);
    else
        orderedTickets = orderByTitle(tickets);

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
};
