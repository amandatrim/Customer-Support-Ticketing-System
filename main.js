/* Fetch ticket asynchronous function */

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
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.classList.remove("hidden");
    }
}

fetchTickets();