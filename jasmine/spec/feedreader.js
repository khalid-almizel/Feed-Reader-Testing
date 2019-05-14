/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() { // A test suite to make sure that the allFeeds variable has been defined and that it is not empty.
       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('URL defined', function() {
            allFeeds.forEach(element => { 
                expect(element.url).toBeDefined(); 
                expect(element.url.length).not.toBe(0); //check that the url is not empty by using not to be
            });
        })


        it('name defined', function() {
            allFeeds.forEach(element => { 
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        })
    });


    describe('The menu', function(){

        // a test that ensures the menu element is hidden by default.
        it('menu is hidden', function(){
            var body = $("body");

            expect(body.hasClass('menu-hidden')).toBe(true)
            
        })

        //to make sure for menu changes
         it('hide or display the menu', function(){
             let menuIcon = document.getElementsByClassName('menu-icon-link')[0];
             let body = $("body");
             menuIcon.click()
             expect(body.hasClass('menu-hidden')).toBe(false) 
             menuIcon.click()
             expect(body.hasClass('menu-hidden')).toBe(true) 
         })

    })


    describe('first Entries', function(){

        
        ////at load feed one single entry 
        var Length;
        beforeEach(function(done){
           loadFeed(0, function(){
            Length = $('.feed .entry').length 
            done()
           })
            
        })

        it('at least one entry', function(done){
           
           expect(Length).toBeGreaterThan(0)
           done()
          
        })


    })

    describe('New Feed loaded', function(){
       
        var load
        var loaded  
        beforeEach(function(done){
            loadFeed(0, function(){
                load = $('.feed').html()
                loadFeed(1, function(){
                    loaded = $('.feed').html()
                    done()
                })
            })
        })

        it('changing the content', function(done){
            expect(load).not.toBe(loaded) 
            done()
         })
    })

}());
