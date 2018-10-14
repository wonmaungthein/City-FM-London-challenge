// <reference types=“Cypress” />

const page = {
  desktop : {
    Header: '#header_localise_link',
    stationList: '.station-list > :nth-child(2) > a',
    artistList: '.track__track-info > .artist',
    recentArtistsList: '.cardset .artist',
    LastPlaySongUrl:'/radio/last-played-songs/',
  },
  mobile : {
    Header : '#localise_nav_link > a',
    nowPlayingArtistList:':nth-child(5) .now-playing__text-content__details__artist',
    lastPlayedSongs:':nth-child(5)> .now-playing__wrapper > .now-playing__links > ul > :nth-child(1) > a',
    toggle:'section.now-playing__track > a.now-playing__toggle'
  }
}
   
const artistName = 'Calvin Harris'
   
const LondonStation = ()=>{
  cy.get(page.desktop.stationList).should('contain','London').click()
  cy.url().should('include','/london/')
}
  
const LondonStationForDesktop = ()=>{
  cy.get(page.desktop.Header).click()
  LondonStation()
}
   
const clickBurgerMenu = () => {
  cy.get('.skip-nav').click()
}
   
context('City FM radio Station London', () => {
  describe('Desktop', () => {
    beforeEach(() => {
    // had to set the viewport in beforeEach because otherwise it keeps being reset between runs
      cy.viewport(1280, 768)
      cy.visit('/')
    })
   
  describe('Now Playing list', () => {
  it('should validate if Calvin Harris is playing', () => {
      LondonStationForDesktop()
      cy.get(page.desktop.artistList)
      .should('contain', artistName)
      })
    })
    
  describe('Recently played list',()=>{
    it('should validate if Calvin Harris was played', ()=>{
      LondonStationForDesktop()
      cy.get('.see_more').should('contain','See more').click()
      cy.url().should('include',page.desktop.LastPlaySongUrl)
      cy.get(page.desktop.recentArtistsList).should('contain',artistName)
      })
    })
  })
   
describe('Mobile Screen (iPhone 6)', () => {
  before(() => {
      cy.visit('/')
      clickBurgerMenu()
  })
   
  describe('Now Playing list', () => {
      it('should validate if Calvin Harris is playing', () => {
      cy.get(page.mobile.Header).click()
      LondonStation()
      cy.get(page.mobile.nowPlayingArtistList).should('contain',artistName)
    })
  })
   
  describe('Recently played list',()=>{
    it('should validate if Calvin Harris was played', ()=>{
      cy.get(page.mobile.toggle).click()
      cy.get(page.mobile.lastPlayedSongs).click()
      cy.url().should('include',page.desktop.LastPlaySongUrl)
      cy.get(page.desktop.recentArtistsList).should('contain',artistName)
    })
  })
 })
})