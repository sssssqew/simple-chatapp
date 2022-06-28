<script>
	import {auth, googleProvider} from "./firebase"
	import { signInWithPopup, signOut } from "firebase/auth"
	import {authState} from "rxfire/auth"
	import Chatroom from "./Chatroom.svelte"

	let user

	const unsubscribe = authState(auth).subscribe(usr => user = usr)
	function login() {
		signInWithPopup(auth, googleProvider)
		.then(result => {
			const credential = googleProvider.credentialFromResult(result)
			const token = credential.accessToken
   			const user = result.user
			console.log(`token: ${token}`)
			console.log(`user: ${user}`)
		}).catch((error) => {
			console.log('Failed to login !')
		})
	}
	function logout(){
		signOut(auth).then(() => {
			console.log('Sign out is successful !')
		}).catch((error) => {
			console.log('Failed to sign out !')
		});
	}
</script>

<main>
	{#if user}
		<Chatroom user={user} logout={logout}/>
	{:else}
		<div class="login-form">
			<button on:click={login}>
				<i class="fa-brands fa-google"></i>
				Sign In with Google
			</button>
		</div>
	{/if}
</main>

<style>
	main{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		max-width: 400px;
		max-height: 500px;
		border: 1px solid #eee;
		background: #fff;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
	}
	.login-form{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.login-form button{
		padding: 10px;
		background: #fff;
		color: #111;
		font-size: 16px;
		cursor: pointer;
		outline: none;
		border: 1px solid #bbb;
	}
	.login-form button i.fa-brands{
		padding-right: 10px;
		border-right: 1px solid #ddd;
		color: #555;
	}
</style>