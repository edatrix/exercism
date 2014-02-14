var Bob = require('./bob').Bob;

describe("TeenagerTest", function() {
  var teenager = new Bob();
  
  it("test_stating_something", function() {
    var response = teenager.hey('Tom-ay-to, tom-aaaah-to.');
    expect(response).toBe('Whatever.');
  });

  it("test_shouting", function(){
    var response = teenager.hey('WATCH OUT!');
    expect(response).toBe('Woah, chill out!');
  });

  it("test_asking_a_question", function(){
    var response = teenager.hey('Does this cryogenic chamber make me look fat?');
    expect(response).toBe('Sure.');
  });

  it("test_asking_a_numberic_question", function(){
    var response = teenager.hey('You are, what, like 15?');
    expect(response).toBe('Sure.');
  });

  it("test_talking_forcefully", function(){
    var response = teenager.hey('Lets go make out behind the gym!');
    expect(response).toBe('Whatever.');
  });

  it("test_using_acronyms_in_regular_speech", function(){
    var response = teenager.hey("It's OK if you don't want to go to the DMV.");
    expect(response).toBe('Whatever.');
  });

  it("test_forceful_questions", function(){
    var response = teenager.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(response).toBe('Woah, chill out!');
  });
 
  it("test_shouting_numbers", function(){
    var response = teenager.hey('1, 2, 3 GO!');
    expect(response).toBe('Woah, chill out!');
  });

  it("test_shouting_with_special_characters", function(){
    var response = teenager.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(response).toBe('Woah, chill out!');
  });

  it("test_shouting_with_no_exclamation_mark", function(){
    var response = teenager.hey('I HATE YOU');
    expect(response).toBe('Woah, chill out!');
  });

  it("test_statement_containing_question_mark", function(){
    var response = teenager.hey('Ending with ? means a question.');
    expect(response).toBe('Whatever.');
  });

  it("test_prattling_on", function(){
    var response = teenager.hey('Wait! Hang on. Are you going to be OK?');
    expect(response).toBe('Sure.');
  });

  it("test_silence", function(){
    var response = teenager.hey('');
    expect(response).toBe('Fine. Be that way!');
  });

  it("test_prolonged_silence", function(){
    var response = teenager.hey('    ');
    expect(response).toBe('Fine. Be that way!');
  });

});
