<template>
	<div class='fl side'>
		<ul>
			<li>
				<p>导航一</p>
				<div>
					<p>
						<router-link to='/table'>table</router-link>
					</p>
					<p>
						<router-link to='/form'>form</router-link>
					</p>
					<p>
						<router-link to='/user'>user</router-link>
					</p>
				</div>
			</li>
			<li>
				<p>导航二</p>
				<div>
					<p>
						<router-link to='/pageone'>pageone</router-link>
					</p>
					
				</div>
			</li>
			<li>
				<p>导航三</p>
				<div>
					<p>
						<router-link to='/pagetwo'>pagetwo</router-link>
					</p>
					
				</div>
			</li>
			<li>
				<p>导航四</p>
				<div>
					<p>
						<router-link to='/pagethr'>pagethr</router-link>
					</p>
					
				</div>
			</li>
		</ul>
	</div>
</template>
<script></script>
<style scoped>
.side{
	flex:0 0 230px;
	width:230px;
	background:#ccc;
	height:100%;
}
</style>