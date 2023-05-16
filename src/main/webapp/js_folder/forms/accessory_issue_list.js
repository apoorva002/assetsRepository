var accessoryIssue = {
		"id": "accessoryissuelist",
		"title" : "Accessory Issue",
		"parentId": "accessoryIssueListContainer",
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
				"type" : "select",
				"name" : "accessoryId",
				"label" : "Accessory",
				"required" : true,
				"provider" : {
					"ajax" : "http://localhost:9091/jet/accessoryForm",
					"value" : "id",
					"label" : "name"
				},
				"col": 12
			},
			{
				"type" : "select",
				"name" : "employeeId",
				"label" : "Issue To(Employee)",
				"required" : true,
				"provider" : {
					"ajax" : "http://localhost:9091/jet/pis/employee",
					"value" : "id",
					"label" : "name"
				},
				"col": 12,
			},
			{
				"type": "date",
				"name": "issueDate",
				"label": "Issue Date ",
				"required": false
			},
			
			{
				"type": "text",
				"name": "issueQuantiy",
				"label": "Issue Quantity ",
				"required": false
			},
			{
				"type": "text",
				"name": "remark",
				"label": "Remark/Purpose ",
				"required": false
			},
            
			
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
				"success": {"href":"accessory-issue-list"},
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
				"success": {"href":"accessory-issue-list"},
			}
		},
		{
			"name": "add",
			"type": "button",
			"label": "Accessory-Issue",
			"applyTo": "list",
			"cssClass": "btn-danger",
			"handler": {
				"href": "accessory-issue"
			}
		},
		{
			"name": "edit",
			"type": "button",
			"label": "Edit",
			"applyTo": "row",
			"cssClass": "btn-primary",
			"handler": {
				"href": "accessory-issue"
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
			"ajax": "http://localhost:9091/jet/accessoryIssue",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/accessoryIssue/{id}",
			"method": "get",
			"pathParams":{"id":"#id"}

		},
		"create": {
			"ajax": "http://localhost:9091/jet/accessoryIssue",
			"method": "post",
			"pathParams": {},
			"queryParams": {},
			"requestParams": {}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/accessoryIssue",
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/accessoryIssue/{id}",
			"method": "delete"
		}
	}
};