var accessoryTypeForm = {
		"id": "accessoryTypeForm",
		"parentId":"accessoryTypeListContainer",
		"title" : "Accessory Type",
		"namespace" : "",
		"enctype": "multipart/form-data",
		"fields": [ 
			{
				"type": "hidden",
				"name": "id",
				"id":true,
				"required": true,
				

			},
			{
				"type": "text",
				"name": "name",
				"label": "Name",
				"required": true,
				"listable":true,
				"searchable": true,
				"validations": {
					"rules": {
						"minlength": 5
					},
					"messages": {
						"minlength": " Your accessory must consist of at least 2 characters"
					}
				}
				
			}
		],
		"actions": [{
			"name": "save",
			"type": "submit",
			"label": "Save",
			"applyTo": "form",
			"handler": {
				"script": "submitForm(event)",
			},
			"redirects": {
				"success": {"href":"accessory-type-list"},
				"failure": {"script":"alert('Saving operation failed')"}
			},
			"cssClass": "btn-primary"
		}, {
			"name": "cancel",
			"type": "button",
			"label": "Cancel",
			"applyTo": "form",
			"cssClass": "btn-secondary",
			"redirects": {
				"success": {"href":"accessory-type-list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Add Accessory",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "accessory-type"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "accessory-type"
			}
		},
		{
			"name": "delete",
			"type": "button",
			"label": "Delete",
			"applyTo": "row",
			"cssClass": "btn-danger",
			/*"handler": {
				"script": "delete(event)"
			}*/
		}
	],
	"providers": {
		"collection": {
			"ajax": "http://localhost:9091/jet/accessory",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/accessory/{id}",
			"method": "get",
			"pathParams":{"id":"#id"},
			//"dataNode": "data"

		},
		"create": {
			"ajax": "http://localhost:9091/jet/accessory",
			"method": "post",
			"pathParams": {},
			"queryParams": {},
			"requestParams": {}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/accessory",
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/accessory/{id}",
			"method": "delete"
		}
	}
	};