// Chart.js Configuration
document.addEventListener('DOMContentLoaded', () => {
    // 1. EdgeCortex Performance Chart
    const ctx = document.getElementById('edgeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Naive Loop', 'Tiled GEMM (Ours)'],
            datasets: [{
                label: 'Execution Time (ms) - Lower is Better',
                data: [110.3, 67.0],
                backgroundColor: ['#333333', '#3b82f6'],
                borderColor: ['#444444', '#2563eb'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#222' },
                    ticks: { color: '#666' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#aaa', font: { family: 'JetBrains Mono' } }
                }
            }
        }
    });

    // 2. Telemetry Uptime
    const startTime = Date.now();
    setInterval(() => {
        const uptime = Math.floor((Date.now() - startTime) / 1000);
        document.getElementById('uptime').innerText = `${uptime}s`;
    }, 1000);

    // 3. GitHub Activity Fetcher
    fetchGitHubActivity();
});

async function fetchGitHubActivity() {
    const feed = document.getElementById('github-feed');
    try {
        const response = await fetch('https://api.github.com/users/Doku566/events/public');
        if (!response.ok) throw new Error('API Rate Limit');
        const data = await response.json();

        // Filter for PushEvents
        const pushes = data.filter(e => e.type === 'PushEvent').slice(0, 5);

        if (pushes.length === 0) {
            feed.innerHTML = '<div class="text-gray-500">No recent transmissions detected.</div>';
            return;
        }

        feed.innerHTML = '';
        pushes.forEach(event => {
            const repo = event.repo.name.split('/')[1];
            const msg = event.payload.commits[0]?.message.split('\n')[0] || 'Update';
            const date = new Date(event.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            const row = document.createElement('div');
            row.className = 'flex gap-4 border-b border-gray-800 pb-2 last:border-0';
            row.innerHTML = `
                <span class="text-gray-600 w-16 text-right">${date}</span>
                <span class="text-primary font-bold w-24 truncate">${repo}</span>
                <span class="text-gray-400 truncate flex-1">${msg}</span>
            `;
            feed.appendChild(row);
        });

    } catch (error) {
        feed.innerHTML = '<div class="text-red-900/50">Connection Error: Unable to fetch GitHub telemetry.</div>';
    }
}
