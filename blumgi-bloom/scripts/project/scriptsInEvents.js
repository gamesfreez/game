


const scriptsInEvents = {

	async Eloading_Event4_Act3(runtime, localVars)
	{
		runtime.globalVars.PokiHasInitialised = globalThis.PokiHasInitialised;
	},

	async Epokimanager_Event24_Act1(runtime, localVars)
	{
		PokiSDK.customEvent('game','segment',{segment:runtime.layout.name})
	},

	async Epokimanager_Event26_Act4(runtime, localVars)
	{
		PokiSDK.commercialBreak().then(
		    () => {
		        console.log("Commercial break finished, proceeding to game");
				runtime.globalVars.PokiIsPaused = false;
				runtime.globalVars.PokiHasSounds = true;
				
				runtime.globalVars.PokiIsPlayingMidrollAd=false;
				PokiSDK.gameplayStart();
				
		        // your code to continue to game
		    }
		);
	},

	async Epokimanager_Event28_Act4(runtime, localVars)
	{
		PokiSDK.gameplayStop();
		
		PokiSDK.rewardedBreak().then(
		    (success) => {
		        if(success) {
		          // video was displayed, give reward
				  runtime.globalVars.PokiIsPaused = false;
				  runtime.globalVars.PokiHasSounds = true;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  PokiSDK.gameplayStart();	
				  runtime.globalVars.PokiGiveReward=true;
		
		        }
		        else {
				runtime.globalVars.PokiIsPaused = false;
				runtime.globalVars.PokiHasSounds = true;
				  runtime.globalVars.PokiIsPlayingRewardedAd=false;
				  PokiSDK.gameplayStart();
				  //runtime.globalVars.PokiGiveReward=true;
				  //runtime.globalVars.gm_GoBackGame=true;
				  
		          // video not displayed, should probably not give reward
				 
		        }
		    }
		);
	},

	async Epokimanager_Event30_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStart();
		console.log("Gameplay has started");
	},

	async Epokimanager_Event32_Act1(runtime, localVars)
	{
		PokiSDK.gameplayStop();
		console.log("Gameplay has stopped");
	},

	async Epokimanager_Event34_Act1(runtime, localVars)
	{
		PokiSDK.gameLoadingFinished();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

