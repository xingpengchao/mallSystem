(function() {
  describe('Simple hotkeys', function() {
    var hotkeys;
    hotkeys = null;
    $('<div class="editor"></div>').appendTo('body');
    beforeEach(function() {
      return hotkeys = simple.hotkeys({
        el: '.editor'
      });
    });
    afterEach(function() {
      return hotkeys.destroy();
    });
    it("should inherit from SimpleModule", function() {
      return expect(hotkeys instanceof SimpleModule).toBe(true);
    });
    it("could be destroyed", function() {
      hotkeys.destroy();
      return expect(hotkeys._map).toEqual({});
    });
    it("normalize keyid", function() {
      var clazz;
      clazz = hotkeys.constructor;
      expect(clazz.normalize("SHIFT+A")).toBe("shift_a");
      expect(clazz.normalize("ctrl  + alt+ left")).toBe("alt_control_left");
      expect(clazz.normalize("ctrl  + alt+ escape")).toBe("alt_control_esc");
      expect(clazz.normalize("Cmd+ shift+a")).toBe("meta_shift_a");
      return expect(clazz.normalize("Windows + alt+ a")).toBe("alt_meta_a");
    });
    it("add an hotkey", function() {
      var handler, keydownEvent;
      hotkeys.add("ctrl + b", handler = jasmine.createSpy('handler'));
      $(hotkeys.opts.el).trigger(keydownEvent = $.Event('keydown', {
        which: 66,
        ctrlKey: true
      }));
      return expect(handler).toHaveBeenCalledWith(keydownEvent);
    });
    it("remove an hotkey", function() {
      var handler, keydownEvent;
      hotkeys.add("ctrl + b", handler = jasmine.createSpy('handler')).remove("ctrl + b");
      $(hotkeys.opts.el).trigger(keydownEvent = $.Event('keydown', {
        which: 66,
        ctrlKey: true
      }));
      return expect(handler).not.toHaveBeenCalledWith(keydownEvent);
    });
    it("add dynamic one", function() {
      var editor, handler, keydownEvent;
      hotkeys.add("ctrl+b", handler = jasmine.createSpy('handler'));
      editor = $('<div class="editor"></div>').appendTo('body');
      editor.trigger(keydownEvent = $.Event('keydown', {
        which: 66,
        ctrlKey: true
      }));
      expect(handler).toHaveBeenCalledWith(keydownEvent);
      hotkeys.add("ctrl+h", handler = jasmine.createSpy('handler'));
      editor.trigger(keydownEvent = $.Event('keydown', {
        which: 72,
        ctrlKey: true
      }));
      return expect(handler).toHaveBeenCalledWith(keydownEvent);
    });
    return it("respondTo", function() {
      hotkeys.add("ctrl + shift + h", function() {});
      expect(hotkeys.respondTo($.Event('keydown', {
        which: 72,
        ctrlKey: true,
        shiftKey: true
      }))).toBe(true);
      return expect(hotkeys.respondTo("ctrl + shift + h")).toBe(true);
    });
  });

}).call(this);
