var AccessoryForm = {
	"id": "accessoryId",
	"parentId": "accessoryFormContainer",
	"title": "Accessory Form",
	"namespace": "",
	"enctype": "multipart/form-data",
	"fields": [
		{
			"type": "hidden",
			"name": "id",
			"id": true,
			"required": true,


		},
		{
			"type": "group",
			"name": "nameGroup",
			"label": "name",
			"col": 12,
			"fields": [
				{
					"type": "text",
					"name": "skuNumber",
					"label": "SKU Number",
					"required": true,
					"placeHolder": "SKU Number",
					"col": 6,
					"validations": {
						"rules": {
							"minlength": 5
						},
						"messages": {
							"minlength": " Your SKUNumber must consist of at least 5 characters"
						}
					}

				}, {
					"type": "text",
					"name": "name",
					"label": "Name",
					"placeHolder": "Name",
					"required": true,
					"col": 6,
					"validations": {
						"rules": {
							"minlength": 3
						},
						"messages": {
							"minlength": " Your name must consist of at least 3 characters"
						}
					}
				}, {
					"type": "text",
					"name": "description",
					"label": "Description",
					"required": true,
					"placeHolder": "Description",
					"col": 6,
					"validations": {
						"rules": {
							"minlength": 5
						},
						"messages": {
							"minlength": " Your description must consist of at least 5 characters"
						}
					}

				},

				{
					"type": "date",
					"name": "purchaseDate",
					"label": "Purchase Date ",
					"required": true,
					"col": 6
				},
				{
					"type": "text",
					"name": "unitCost",
					"label": "Unit Cost",
					"required": true,
					"col": 6
				},
				{
					"type": "text",
					"name": "purchaseQuantity",
					"label": "Purchase Quantity",
					"required": true,
					"col": 6
				},
				{
					"type": "text",
					"name": "billNo",
					"label": "Bill No",
					"listable": false,
					"required": true,
					"col": 6
				},
				{
					"type": "text",
					"name": "vendor",
					"label": "Vendor",
					"listable": false,
					"required": true,
					"col": 6
				},

				{
					"type": "select",
					"name": "type",
					"label": "Type",
					"listable": false,
					"provider": {
						"ajax": "http://localhost:9091/jet/accessory",
						"value": "id",
						"label": "name"
					},
					"required": true,
					"col": 6
				},



				{
					"type": "file",
					"name": "billDocument",
					"label": "Bill Document",
					"listable": false,
					"accept": "image/png, image/jpeg",
					"col": 6
				}],
		}],
	"actions": [{
		"name": "save",
		"type": "submit",
		"label": "Save",
		"applyTo": "form",
		"handler": {
			"script": "submitForm(event)",
		},
		"redirects": {
			"success": { "href": "accessories-list" },
			"failure": { "script": "alert('Saving operation failed')" }
		},
		"cssClass": "btn-primary"
	}, {
		"name": "cancel",
		"type": "button",
		"label": "Cancel",
		"applyTo": "form",
		"cssClass": "btn-secondary",
		"redirects": {
			"success": { "href": "accessories-list" },
		}
	},
	{
		"name": "add",
		"type": "button",
		"label": "Add Accessory",
		"applyTo": "list",
		"cssClass": "btn-danger",
		"handler": {
			"href": "accessories"
		}
	},
	{
		"name": "edit",
		"type": "button",
		"label": "Edit",
		"applyTo": "row",
		"cssClass": "btn-primary",
		"handler": {
			"href": "accessories"
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
			"ajax": "http://localhost:9091/jet/accessoryForm",
			"method": "get",
		},
		"selector": {
			"ajax": "http://localhost:9091/jet/accessoryForm/{id}",
			"method": "get",
			"pathParams": { "id": "#id" }
			//"dataNode": "data"
		},
		"create": {
			"ajax": "http://localhost:9091/jet/accessoryForm",
			"method": "post",
			"pathParams": {},
			"queryParams": {},
			"requestParams": {}
		},
		"update": {
			"ajax": "http://localhost:9091/jet/accessoryForm",
			"method": "put"
		},
		"delete": {
			"ajax": "http://localhost:9091/jet/accessoryForm/{id}",
			"method": "delete"
		}
	}

};