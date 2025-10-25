import json, os

root = "."
info = {
  "entry_points": [],
  "build": None,
  "languages": set(),
}

for dirpath, _, files in os.walk(root):
    if any(skip in dirpath for skip in [".git", "node_modules", "vendor", ".venv", "dist", "build"]):
        continue
    for f in files:
        p = os.path.join(dirpath, f)
        if f in ("main.go", "Program.cs", "server.js", "app.py", "manage.py", "index.ts", "index.js"):
            info["entry_points"].append(p)
        if f == "package.json":
            info["build"] = "npm"
        if f == "pom.xml":
            info["build"] = "maven"
        if f.endswith(".go"):
            info["languages"].add("go")
        if f.endswith(".cs"):
            info["languages"].add("csharp")
        if f.endswith((".js", ".ts", ".jsx", ".tsx")):
            info["languages"].add("js/ts")
        if f.endswith(".py"):
            info["languages"].add("python")

info["languages"] = sorted(info["languages"])
print(json.dumps(info, indent=2))
