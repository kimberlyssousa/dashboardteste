// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        sidebarOpen = false;
    }
}

var url = 'planilha/pasta1.csv'

// Função para carregar os dados da planilha
function carregarDadosPlanilha(url) {
    Papa.parse(url, {
        download: true,
        header: true,
        complete: function (results) {
            var dadosPlanilha = results.data;

            // Processar os dados conforme necessário
            var labels = [];
            var data = [];

            dadosPlanilha.forEach(function (item) {
                labels.push(item.mes);
                data.push(parseInt(item.vendas));
            });

            // Configuração do gráfico
            var config = {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Vendas',
                        data: data,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            // Criação do gráfico
            var myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
        }
    });
}

// Chamada para carregar os dados da planilha
carregarDadosPlanilha(url);

