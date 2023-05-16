package com.jetassets.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class AssetsController {
	
	@RequestMapping("/accessories")
	public String accessorys() {
		return "accessory";
		
	}
	@RequestMapping("/accessories-list")
	public String accessorysList() {
		return "accessories-list";
		
	}
	@RequestMapping("/assets-list")
	public String assetsList() {
		return "assets-list";
		
	}
	@RequestMapping("/assets")
	public String assets() {
		return "assets";
		
	}
	@RequestMapping("/accessory-issue-list")
	public String accessory_issue_list() {
		return "accessory-issue-list";
		
	}
	@RequestMapping("/accessory-issue")
	public String accessory_issue() {
		return "accessory-issue";
		
	}
	
	@RequestMapping("/asset-assignment-list")
	public String asset_assignment_list() {
		return "asset-assignment-list";
	}
	@RequestMapping("/asset-assignment")
	public String asset_assignment() {
		return "asset-assignment";
	}
	
	@RequestMapping("/asset-type-list")
	public String assetTypeList() {
		return "asset-type-list";
	}
	
	@RequestMapping("/asset-type")
	public String assetType() {
		return "asset-type";
	}
	@RequestMapping("/accessory-type-list")
	public String accessoryTypeList() {
		return "accessory-type-list";
	}
	@RequestMapping("/accessory-type")
	public String accessoryType() {
		return "accessory-type";
	}
	@RequestMapping("/parent-type-list")
	public String parentTypeList() {
		return "parent-type-list";
	}
	@RequestMapping("/parent-type")
	public String parentType() {
		return "parent-type";
	}
}
