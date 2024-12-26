module.exports = {
  apps: [{
    name: "instance-api",
    interpreter: "/root/instance.evict.bot/venv/bin/python",
    script: "-m",
    args: "uvicorn app:app --host 0.0.0.0 --port 8080 --reload",
    cwd: "/root/instance.evict.bot",
    env: {
      API_KEY: "t76oev5UkeMyo8XQwv5Ozwo3amVsi",
      PYTHONPATH: "/root/instance.evict.bot"
    }
  }]
};
