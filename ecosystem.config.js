module.exports = {
    apps: [
        {
            name: "paws-friend",                        // PM2 process name
            script: "node_modules/.bin/next",           // Next.js binary
            args: "start",                              // Run next start
            cwd: "./",                                  // Root directory
            interpreter: "none",                        // Direct binary use
            env: {
                NODE_ENV: "development",
                PORT: 7000
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 7000
            },
            watch: false,                               // No auto-watch in prod
            instances: 1,                               // 1 instance (Next.js SSR ke liye best)
            autorestart: true,                          // Restart on crash
            max_memory_restart: "512M",                 // Memory limit
            out_file: "./logs/out.log",                 // Logs
            error_file: "./logs/error.log",
            merge_logs: true,
            time: true
        }
    ]
};
