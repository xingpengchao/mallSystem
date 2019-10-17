
describe 'Simple hotkeys', ->

  hotkeys = null
  $('<div class="editor"></div>').appendTo 'body'

  beforeEach ->
    hotkeys = simple.hotkeys el: '.editor'

  afterEach ->
    hotkeys.destroy()

  it "should inherit from SimpleModule", ->
    expect(hotkeys instanceof SimpleModule).toBe(true)

  it "could be destroyed", ->
    hotkeys.destroy()
    expect hotkeys._map
      .toEqual {}

  it "normalize keyid", ->
    clazz = hotkeys.constructor
    expect clazz.normalize "SHIFT+A"
      .toBe "shift_a"
    expect clazz.normalize "ctrl  + alt+ left"
      .toBe "alt_control_left"
    expect clazz.normalize "ctrl  + alt+ escape"
      .toBe "alt_control_esc"
    expect clazz.normalize "Cmd+ shift+a"
      .toBe "meta_shift_a"
    expect clazz.normalize "Windows + alt+ a"
      .toBe "alt_meta_a"

  it "add an hotkey", ->
    hotkeys.add "ctrl + b", handler = jasmine.createSpy 'handler'
    $(hotkeys.opts.el).trigger keydownEvent = $.Event 'keydown', which: 66, ctrlKey: true
    expect handler
      .toHaveBeenCalledWith keydownEvent

  it "remove an hotkey", ->
    hotkeys
      .add "ctrl + b", handler = jasmine.createSpy 'handler'
      .remove "ctrl + b"
    $(hotkeys.opts.el).trigger keydownEvent = $.Event 'keydown', which: 66, ctrlKey: true
    expect handler
      .not.toHaveBeenCalledWith keydownEvent

  it "add dynamic one", ->
    hotkeys.add "ctrl+b", handler = jasmine.createSpy 'handler'
    editor = $('<div class="editor"></div>').appendTo 'body'
    editor.trigger keydownEvent = $.Event 'keydown', which: 66, ctrlKey: true
    expect handler
      .toHaveBeenCalledWith keydownEvent
    hotkeys.add "ctrl+h", handler = jasmine.createSpy 'handler'
    editor.trigger keydownEvent = $.Event 'keydown', which: 72, ctrlKey: true
    expect handler
      .toHaveBeenCalledWith keydownEvent

  it "respondTo", ->
    hotkeys.add "ctrl + shift + h", () ->
    expect hotkeys.respondTo $.Event 'keydown', which: 72, ctrlKey: true, shiftKey: true
      .toBe true
    expect hotkeys.respondTo "ctrl + shift + h"
      .toBe true
