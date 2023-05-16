
 <!DOCTYPE html>
<html>
<head>
<title>Registration Form</title>
<%@include file="../theme/cdn.jsp" %>
<script type="text/javascript" src="../js_folder/forms/accessory_issue_list.js"></script>
</head>
<!-- body  -->
<body>
	<div class="row">
		<div class="col-md-3">
			<%@include file="../theme/nav_header.jsp"%>
			<%@include file="../theme/header.jsp"%>
		</div>
		<div class="col-md-9">
			<div class="container">
			<div  id="accessoryIssueListContainer"  style="margin-top:8%"></div>
			</div>
		</div>
	</div>

<script>
	$(document).ready(() => {
		var jetList=JetList({"id":"accessoryissuelist", "parentId":"accessoryIssueListContainer", "form":accessoryIssue});
		jetList.render();
	});
</script>
<%@include file="../theme/js_scripts.jsp" %>
<jsp:include page="../template/jetform-template.jsp" />

</body>
</html>



































