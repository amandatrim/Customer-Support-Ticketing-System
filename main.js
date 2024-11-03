/* Fetch tickets asynchronous function */

async function fetchTickets() {
    // Assign the ticket container div and error message paragraph to a variable
    const ticketContainer = document.getElementById("ticket-container");
    const errorMessage = document.getElementById("error-message");

    // Try Catch block for the api GET request
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error("Failed to fetch tickets");
        }

        const tickets = await response.json();

        if (tickets.length === 0) {
            throw new Error("No unresolved tickets available");
        }
        
        displayTickets(tickets);

        // Display an error if the api request is not successfull
    } 
    catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
    }
    finally {
        // Hide loading indicator if present
        const loadingIndicator = document.getElementById('loading-indicator');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
    }
}

/* Display tickets function */

function displayTickets(tickets) {
    const ticketContainer = document.getElementById("ticket-container");
    ticketContainer.innerHTML = "";

    // Loop through each ticket and display them
    tickets.forEach((ticket) => {
        const ticketElement = document.createElement("div");
        ticketElement.className = "ticket";

        ticketElement.innerHTML = `
            <p><strong>Ticket ID:</strong> ${ticket.id}</p>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
        `;

        ticketContainer.appendChild(ticketElement);
    });
}

// Initialize ticket fetching
fetchTickets();
