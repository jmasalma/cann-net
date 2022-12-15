{
	"containerID": "flowquest_container",
	"usePushState" : false,
	"questions": {
		1: {
			"question": "Hgb Levels?",
			"options": {
				"hgb1": {
					"label": "85 - 94 g/L",
					"val": "hgb1",
					"nextQ": 2
				},
				"hgb2": {
					"label": "Hgb 95 - 115 g/L",
					"val": "hgb2",
					"nextQ": 3
				},
				"hgb3": {
					"label": "Hgb > 115 g/L",
					"val": "hgb3",
					"nextQ": 4
				},
			}
		}


		/* ESA 1*/
		, 2: {
			"question": "On ESA?",
			"options": {
				"on-esa": {
					"label": "Yes",
					"val": "on-esa",
					"classes": "on-esa",
					"nextQ": 10
				}
				, "not-on-esa": {
					"label": "No",
					"val": "not-on-esa",
					"classes": "not-on-esa",
					"nextQ": null
				}
			}
		}

		/* ESA 2*/
		, 3: {
			"question": "On ESA?",
			"options": {
				"on-esa": {
					"label": "Yes",
					"val": "on-esa",
					"classes": "on-esa",
					"nextQ": null
				}
				, "not-on-esa": {
					"label": "No",
					"val": "not-on-esa",
					"classes": "not-on-esa",
					"nextQ": null
				}
				, "on-hold-esa": {
					"label": "ESA on hold",
					"val": "on-hold-esa",
					"classes": "on-hold-esa",
					"nextQ": null
				}
			}
		}


		/* dose increase */
		, 10: {
			"question": "Was dose increased in the past 5 weeks?",
			"options": {
				"dose-increased": {
					"label": "Yes",
					"val": "dose-increased",
					"classes": "dose-increased",
					"nextQ": null
				}
				, "dose-not-increased": {
					"label": "No",
					"val": "dose-not-increased",
					"classes": "dose-not-increased",
					"nextQ": null
				}
			}
		}


	},
	answers: {
		patterns: {
			"hgb1|on-esa|": {
				"position": "Re-measure iron bloodwork if not done in past week",
				"content": "If no dosage increase in the past 5 weeks..."
			}


			, "hgb1|on-esa|dose-increased|": {
				"position": "maintain current does",
				"content": "Continue routine Hgb monitoring every 6 weeks."
			}
			, "hgb1|on-esa|dose-not-increased|": {
				"position": "increase dose as per table...",
				"content": "<table><tr><td>header</td><td>header2</td></tr><tr><td>value</td><td>value1</td></tr></table>"
			}


			, "hgb1|not-on-esa|": {
				"position": "Re-measure iron bloodwork if not done in past week",
				"content": "Consult MD to initiat ESA"
			}

			, "hgb2|on-esa|": {
				"position": "Maintain ESA dose",
				"content": "Continue routine Hgb monitoring every 6 weeks."
			}
			, "hgb2|not-on-esa|": {
				"position": "No ESA required",
				"content": "Continue routine Hgb monitoring every 6 weeks."
			}
			, "hgb2|on-hold-esa|": {
				"position": "Restart ESA at reduced dose based on...",
				"content": "Continue routine Hgb monitoring every 6 weeks."
			}



		}
	}
}
