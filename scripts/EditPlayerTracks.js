class EditPlayerTracks extends FormApplication {
    constructor(...args){
        super(...args);
        //This is a good place to set up some variables at the top level so we can access them with this.
        if (this.object.isToken) {
            this.options.title=`Character track editor for [Token] ${this.object.name}`
        } else {
            this.options.title=`Character track editor for ${this.object.name}`
        }
    } //End constructor

    static get defaultOptions(){
        const options = super.defaultOptions;
        options.template = "systems/ModularFate/templates/EditPlayerTracks.html";
        options.width = "auto";
        options.height = "auto";
        options.title = `Character track editor`;
        options.closeOnSubmit = false;
        options.id = "PlayerTrackSetup";
        options.resizable = true;
        return options 
    } // End getDefaultOptions

    async _updateObject(event, formData){
        // This returns all the forms fields with names as a JSON object with their values. 
        // It is required for a FormApplication.
        // It is called when you call this.submit();

        //await this.object.update({"data.tracks":this.working_tracks}); 
    }

    activateListeners(html) {
        super.activateListeners(html);
        //const skillButtons = html.find("button[class='skill_button']");
        //skillButtons.on("click", event => this._onSkillButton(event, html));
        //skillButtons.on("click", event => this._onSkillButton(event, html));
        //async _onSortButton(event, html){
        //}
        
        Hooks.on("renderModularFateCharacter",(app, html, data)=> {
            this.render(false);
        });   
    } //End activateListeners

    async getData(){

        //TemplateData is returned to the form for use with HandleBars.
        const templateData = {
            
        }
        return templateData;
    } //End getData
} //End EditPlayerTracks