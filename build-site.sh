#!/bin/bash
middleman build
FILE_DIRECTORIES=("build" "build/references" "build/contact" "build/projects")
for dir in "${FILE_DIRECTORIES[@]}"; do
	critical "${dir}/index.html" --minify --inline --base "build/" > "${dir}/index-critical.html"
	mv "${dir}/index-critical.html" "${dir}/index.html"
	echo "Performed critical inlining on ${dir}/index.html"
done