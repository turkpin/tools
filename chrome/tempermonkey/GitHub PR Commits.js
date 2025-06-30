// ==UserScript==
// @name         GitHub PR Commits
// @namespace    http://tampermonkey.net/
// @version      2025-01-09
// @description  try to take over the world!
// @author       You
// @match        https://github.com/turkpin/management-service/pull/*/commits/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function () {
	"use strict";

	function lol() {
		var header_element = document.querySelector("#partial-discussion-header");
		var commit_element = document.querySelector(".prh-commit");
		header_element.after(commit_element);

		var css = `
            body:has(.pr-toolbar.position-stuck) .prh-commit {
                top: 62px;
            }

            .prh-commit {
                position: sticky;
                top: 4px;
                z-index: 9999999999;
                transition: top 0.2s linear;
            }

            .commit-title {
                font-size: 24px !important;
            }
        `;

		document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);

		var commit_list = document.querySelector(".js-diffbar-range-list");
		var selected_commit = commit_list.querySelector(".in-range");

		var commit_count = commit_list.children.length;
		var commit_index = Array.from(commit_list.children).indexOf(
			selected_commit
		);

		var commit_title = document.querySelector(".commit-title");
		commit_title.innerHTML += ` # ${commit_index + 1} of ${commit_count}`;
	}

	window.addEventListener("load", function () {
		lol();
	});

	document.addEventListener("keyup", (event) => {
		switch (event.key) {
			case "ArrowRight":
				document.querySelector('[data-hotkey="n"]').click();
				break;
			case "ArrowLeft":
				document.querySelector('[data-hotkey="p"]').click();
				break;

			default:
				break;
		}

		setTimeout(() => {
			lol();
		}, 2000);
	});
})();
