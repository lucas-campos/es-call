const apiUrl = "http://localhost:3000/api/";

document.addEventListener("DOMContentLoaded", () => {
    // Função para carregar chamados - para uso do gestor e técnico
    async function loadTickets(endpoint, tableId) {
        const response = await fetch(`${apiUrl}${endpoint}`);
        const tickets = await response.json();

        const tableBody = document.getElementById(tableId).querySelector("tbody");
        tableBody.innerHTML = ""; // Limpar tabela

        tickets.forEach(ticket => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${ticket.id}</td>
                <td>${ticket.description}</td>
                <td>${ticket.priority}</td>
                <td>${ticket.status}</td>
                ${tableId === "ticketsTable" ? `<td>${ticket.technician || "N/A"}</td><td><button onclick="assignTechnician(${ticket.id})">Atribuir Técnico</button></td>` : ""}
            `;
            tableBody.appendChild(row);
        });
    }

    // Chamada de exemplo para carregar chamados do gestor
    if (document.getElementById("ticketsTable")) {
        loadTickets("tickets", "ticketsTable");
    }

    // Chamada de exemplo para carregar chamados do técnico
    if (document.getElementById("technicianTicketsTable")) {
        loadTickets("technician-tickets", "technicianTicketsTable");
    }
});

function assignTechnician(ticketId) {
    const technicianId = prompt("Digite o ID do técnico:");
    if (!technicianId) return;
    
    // Exemplo de solicitação para a API - adicionar rota e tratamento adequados
    fetch(`${apiUrl}tickets/${ticketId}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ technicianId })
    }).then(() => loadTickets("tickets", "ticketsTable"));
}
