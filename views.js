/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

* More about the properties and functions of the wrapping views - https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

const intro = babeViews.intro({
    trials: 1,
    name: 'intro',
    text:   `This is a sample introduction view.
            <br />
            <br />
            The introduction view welcomes the participant and gives general information
            about the experiment.
            <br />
            <br />
            This mock up experiment is a showcase of the functionality of babe.`,
    buttonText: 'begin the experiment'
});

const instructions = babeViews.instructions({
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `This is a sample instructions view.
            <br />
            <br />
            First you will go through a pracice trial session which consists of two trials.
            The practice trial view uses babe's <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_fc.png'>forced choice trial view</a>.`,
    buttonText: 'to the practice trial'
});

const instructionsCanvas = babeViews.begin({
    trials: 1,
    name: 'instructions_canvas',
    title: 'Generate Shapes',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a sample of a <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_dc.png'>dropwon choice view</a>
            with 3 trials that has a picture of shapes created with <a href='https://github.com/babe-project/babe-project/blob/master/docs/canvas.md'>babe canvas</a>
            <br />
            <br />`,
    buttonText: 'Start the experiment'
});

const instructionsLoop = babeViews.instructions({
    trials: 1,
    name: 'instructions_loop',
    title: 'Loop Through The Views',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a sample of looping through <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ss.png'>sentence choice</a>
            and <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ss.png'>image seleciton</a> task twice.
            <br />
            <br />`,
    buttonText: 'Start the loop sample'
});

const instructionsLifecycle = babeViews.instructions({
    trials: 1,
    name: 'instructions_lifecycle',
    title: 'Trial Lifecycle',
    text:   `This is another instructions view.
            <br />
            <br />
            All the views so far showed the stimulus (if there was such), the question and expected a response at the moment of creation.
            However, on the background all trial views in babe, go through a lifecycle of a:
            <br />
            <br />
            <b>pause</b>
            <br />
            <b>fixation point</b>
            <br />
            <b>stimulus shown</b>
            <br />
            <b>stimulus hidden (or not)</b>
            <br />
            <b>interactions enabled</b>
            <br />
            <br />
            The views that you saw so far also went through these steps using the default lifecycle settings and everything in the trial views was shown at once.
            <br />
            <br />
            Next you will see a <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_sr.png'>Slilder Rating task</a>
            that has a pause of 500 ms, fixation point of 1000 ms and the stimulus appears on the screen for 1500 ms. After the stimulus hides, the response
            form appears and the participant can answer the question.
            <br />
            <br />
            After the rating scale task you will see a <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ti.png'>Textbox Input task</a>
            that has a pause of 500 ms and a stimulus that hides when 'SPACE' is pressed.`,
    buttonText: 'Start trial lifecycle sample'
});

const instructionsHooks = babeViews.instructions({
    trials: 1,
    name: 'instructions_hooks',
    title: 'Hooks and Local Functions',
    text:   `This is another instructions view.
            <br />
            <br />
            So far all the trial views called functions that came with the babe package. However, there
            is also an option to use local functions (defined by you) and hook them
            to a trial view.
            <br />
            <br />
            Next you will see a sample of a <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_rc.png'>Rating Scale task</a>
            that uses a locally defined functions to tell the participant how long they looked at the stimulus.
            <br />
            <br />
            First, a function is hooked after the stimulus appears to timestamp the time the stimulus appears.
            <br />
            <br />
            Then, a function is hooked after the stimulus hides to record the time when the stimulus disappears, calculate the time spent and
            show the participant the calculation.`,
    buttonText: 'Start hooks sample'
});

// warns the real experiment will begin
const instructionsProgressBar = babeViews.instructions({
    trials: 1,
    name: 'instructions_progress_bar',
    title: 'Self-paced reading tasks with a Progress Bar',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see two sample Self-paced reading task
            <br />
            1. <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#self-paced-reading-with-forced-choice-response'>
            Self-paced reading with forced choice response task</a>
            <br />
            2. <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#self-paced-reading-task-with-rating-scale-response'>
            Self-paced reading with rating scale response task</a>
            <br />
            <br />
            The trial views have a progress bar in the top right corner of the screen. You can <a href='https://github.com/babe-project/babe-project#progress-bar'>
            use a progress bar</a> in your experiment with a simple configuration.`,
    buttonText: 'Start the SPR tasks'
});

const instructionsExperiment = babeViews.instructions({
    trials: 1,
    name: 'instructions_experiment',
    title: 'Key Press',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a small <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_kp.png'>Key Press task</a> experiment sample.
            <br />
            <br />
            The experiment will start with practice trials, followed by a view informing the participant when the practice is finished followed by
            another Key Press task functioning as the 'real' main trial.
            <br />
            <br />
            On the screen you will see a square or a circle on a random position (generated with babe's canvas). Your task is to press:
            <br />
            <br />
            <b>F</b> for <b>circle</b>
            <br />
            <b>J</b> for <b>square</b>`,
    buttonText: 'Start the key press task'
});

const beginRealKeyPress = babeViews.begin({
    trials: 1,
    name: 'begin_key_press',
    title: 'Begin the real experiment',
    text: 'This was the practice trial for the key press task. Now the real experiment will begin.',
    buttonText: 'Begin'
});

const instructionsPostTest = babeViews.instructions({
    trials: 1,
    name: 'instructions_post_test',
    title: 'Post Questionnaire',
    text: `Next you will see a sample <a href='/'>Post Test view</a>. 
    The default questions and answer options are in English, however, the whole questionnaire can be translated. In the following Post Test
    sample the questions are in German.`
});

// the post questionnaire can be translated
const postTest = babeViews.postTest({
    trials: 1,
    name: 'post_test',
    title: 'Weitere Angaben',
    text: 'Die Beantwortung der folgenden Fragen ist optional, aber es kann bei der Auswirkung hilfreich sein, damit wir Ihre Antowrten besser verstehen.',
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    languages_question: 'Muttersprache',
    languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    comments_question: 'Weitere Kommentare'
});

const links = babeViews.instructions({
    trials: 1,
    name: 'links',
    title: 'Further information',
    text: `This was a short presentation of babe's funcionality.
        <br />
        <br />
        This sample's file organisation:
        <br />
        <b>views.js</b> - all the views are created here.
        <br />
        <b>trials.js</b> - contains the trial information used in the trial views.
        <br />
        <b>events.js</b> - the local functions are created here.
        <br />
        <b>main.js</b> - the experiment is initialied here.
        <br />
        <br />
        Babe's documentation:
        <br />
        <br />
        <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md'>all about the views</a>
        <br />
        <a href='https://github.com/babe-project/babe-project/blob/master/docs/canvas.md'>babe canvas</a>
        <br />
        <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle'>view lifecycle</a>
        <br />
        <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks'>hooks</a>
        <br />
        <a href='/'>loops</a>
        <br />
        <a href='https://github.com/babe-project/babe-project#progress-bar'>progress bars</a>
        <br />
        <br />
        This sample ran in Debug mode. Next you will see a results table with your answers.`
})

// submits the results
const thanks = babeViews.thanks({
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string
    - trial_type: string - the name of the trial type as you want it to appear in the submitted data
    - data: array - an array of trial objects


* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial lifecycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view   
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial

*/


const sentenceChoiceMF = function(config) {
        babeUtils.view.inspector.missingData(config, "sentence choice");
        babeUtils.view.inspector.params(config, "sentence choice");
        const sentenceChoice = {
            name: config.name,
            title: babeUtils.view.setter.title(config.title, ""),
            render: function(CT, babe) {
                let startingTime;
                const question = babeUtils.view.setter.question(
                    config.data[CT].question
                );
                const story1 = babeUtils.view.setter.QUD(config.data[CT].story1);
				const story2 = babeUtils.view.setter.QUD(config.data[CT].story2);
				const trigger = babeUtils.view.setter.QUD(config.data[CT].trigger);
				const trial_type = config.trial_type[CT];
				if (trial_type == 'main') {
					const resp_shuffle = _.shuffle(['imp', 'noimp'])
					 resp1 = resp_shuffle[0];
					 resp2 = resp_shuffle[1];
					 option1 = resp1 == 'noimp' ? config.data[CT].a_noimp : config.data[CT].a_imp;
					 option2 = resp2 == 'noimp' ? config.data[CT].a_noimp : config.data[CT].a_imp;	
					 viewTemplate = 
					  `<div class='babe-view'>
                    	<h1 class='babe-view-title'>${this.title}</h1>
                    	<p class='babe-view-question babe-view-qud' style='background-color:lightgray'>
							${story1} <br> <br> ${story2} <br> <br> ${trigger}
						</p>
						</div>` ;
				} else {
					const resp_shuffle = _.shuffle(['true', 'false'])
					resp1 = resp_shuffle[0];
					resp2 = resp_shuffle[1];
					option1 = resp1 == 'true' ? config.data[CT].true : config.data[CT].false;
					option2 = resp2 == 'true' ? config.data[CT].true : config.data[CT].false;	
					console.log(option1)
					viewTemplate = 
						`<div class='babe-view'>
                    	<h1 class='babe-view-title'>${this.title}</h1>
                    	<p class='babe-view-question babe-view-qud' style='background-color:lightgray'>
							${story1}
						</p>
						</div>` ;
				}
                
                const answerContainerElem = `
                    <div class='babe-view-answer-container'>
                        <p class='babe-view-question'><strong>${question}</strong></p>
                        <label for='s1' class='babe-response-sentence'>${option1}</label>
                        <input type='radio' name='answer' id='s1' value="${resp1}" />
                        <label for='s2' class='babe-response-sentence'>${option2}</label>
                        <input type='radio' name='answer' id='s2' value="${resp2}" />
                    </div>`;

                $("#main").html(viewTemplate);

                const enableResponse = function() {
                    $(".babe-view").append(answerContainerElem);

                    $("input[name=answer]").on("change", function(e) {
                        console.log(e.target.value);
                        var RT = Date.now() - startingTime; // measure RT before anything else
                        var trial_data = {
                            trial_type: trial_type,
							list_nr: config.list,
                            trial_number: CT + 1,
                            response: e.target.value,
							response_sentence: trial_type == 'main' ? (e.target.value == 'noimp' ? config.data[CT].a_noimp : config.data[CT].a_imp) :
																	   (e.target.value == 'true' ? config.data[CT].true : config.data[CT].false),
							first_response_in_menu: resp1,
                            RT: RT
                        };

                        for (let prop in config.data[CT]) {
                            if (config.data[CT].hasOwnProperty(prop)) {
                                trial_data[prop] = config.data[CT][prop];
                            }
                        }

                        if (config.data[CT].picture !== undefined) {
                            trial_data.picture = config.data[CT].picture;
                        }

                        if (config.data[CT].canvas !== undefined) {
                            for (let prop in config.data[CT].canvas) {
                                if (
                                    config.data[CT].canvas.hasOwnProperty(prop)
                                ) {
                                    trial_data[prop] =
                                        config.data[CT].canvas[prop];
                                }
                            }
                        }

                        babe.trial_data.push(trial_data);
                        babe.findNextView();
                    });
                };

                startingTime = Date.now();

                // creates the DOM of the trial view
                babeUtils.view.createTrialDOM(
                    {
                        pause: config.pause,
                        fix_duration: config.fix_duration,
                        stim_duration: config.stim_duration,
                        data: config.data[CT],
                        evts: config.hook,
                        view: "sentenceChoice"
                    },
                    enableResponse
                );
            },
            CT: 0,
            trials: config.trials
        };

        return sentenceChoice;
    }

// sample a list
const list = _.shuffle(["1","2","3","4","5","6","7","8","9"])[0]; 
// construct the trial sequence
const current_main_shuffle = _.shuffle(_.filter(main_trials.critical, function(i) {return i.list == list}))
const current_filler_shuffle = _.shuffle(main_trials.filler)
					  
const sentenceChoice = sentenceChoiceMF({
    trials: 6,
    name: 'main_trials',
    trial_type: ['filler', 'main', 'filler', 'main', 'filler', 'main'],
	list: list,
    data: [current_filler_shuffle[0],
		   current_main_shuffle[0], 
		   current_filler_shuffle[1],
		   current_main_shuffle[1], 
		   current_filler_shuffle[2],
		   current_main_shuffle[2]]
});



