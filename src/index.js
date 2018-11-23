/*
 * moleculer-oauth2-server
 * Copyright (c) 2018 zerocowl (https://github.com/zerocowl/moleculer-oauth2-server)
 * MIT Licensed
 */

"use strict";

module.exports = {

	name: "oauth2-server",

	/**
	 * Default settings
	 */
	settings: {

	},

	/**
	 * Actions
	 */
	actions: {
		test(ctx) {
			return "Hello " + (ctx.params.name || "Anonymous");
		}
	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};