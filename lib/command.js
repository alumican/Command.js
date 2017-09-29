var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cmd;
(function (cmd) {
    var CommandState;
    (function (CommandState) {
        CommandState[CommandState["Sleeping"] = 0] = "Sleeping";
        CommandState[CommandState["Executing"] = 1] = "Executing";
        CommandState[CommandState["Interrupting"] = 2] = "Interrupting";
    })(CommandState = cmd.CommandState || (cmd.CommandState = {}));
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Easing = (function () {
        function Easing() {
        }
        Easing.linear = function (x, t, b, c, d) {
            return c * t / d + b;
        };
        Easing.easeInQuad = function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        };
        Easing.easeOutQuad = function (x, t, b, c, d) {
            return (-c) * (t /= d) * (t - 2) + b;
        };
        Easing.easeInOutQuad = function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return (-c) / 2 * ((--t) * (t - 2) - 1) + b;
        };
        Easing.easeInCubic = function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        };
        Easing.easeOutCubic = function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        };
        Easing.easeInOutCubic = function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        };
        Easing.easeInQuart = function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        };
        Easing.easeOutQuart = function (x, t, b, c, d) {
            return (-c) * ((t = t / d - 1) * t * t * t - 1) + b;
        };
        Easing.easeInOutQuart = function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return (-c) / 2 * ((t -= 2) * t * t * t - 2) + b;
        };
        Easing.easeInQuint = function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        };
        Easing.easeOutQuint = function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        };
        Easing.easeInOutQuint = function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        };
        Easing.easeInSine = function (x, t, b, c, d) {
            return (-c) * Math.cos(t / d * (Math.PI / 2)) + c + b;
        };
        Easing.easeOutSine = function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        };
        Easing.easeInOutSine = function (x, t, b, c, d) {
            return (-c) / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        };
        Easing.easeInExpo = function (x, t, b, c, d) {
            if (t == 0)
                return b;
            return c * Math.pow(2, 10 * (t / d - 1)) + b;
        };
        Easing.easeOutExpo = function (x, t, b, c, d) {
            if (t == d)
                return b + c;
            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
        };
        Easing.easeInOutExpo = function (x, t, b, c, d) {
            if (t == 0)
                return b;
            if (t == d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        };
        Easing.easeInCirc = function (x, t, b, c, d) {
            return (-c) * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        };
        Easing.easeOutCirc = function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        };
        Easing.easeInOutCirc = function (x, t, b, c, d) {
            if ((t /= d / 2) < 1)
                return (-c) / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        };
        Easing.createEaseInElastic = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (p == 0)
                    p = d * 0.3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return (-a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            };
        };
        Easing.createEaseOutElastic = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d) == 1)
                    return b + c;
                if (p == 0)
                    p = d * 0.3;
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
            };
        };
        Easing.createEaseInOutElastic = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                var p = 0;
                var a = c;
                if (t == 0)
                    return b;
                if ((t /= d / 2) == 2)
                    return b + c;
                if (p == 0)
                    p = d * (0.3 * 1.5);
                if (a < Math.abs(c)) {
                    a = c;
                    s = p / 4;
                }
                else {
                    s = p / (2 * Math.PI) * Math.asin(c / a);
                }
                if (t < 1)
                    return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
            };
        };
        Easing.easeInElastic = function (x, t, b, c, d) {
            return Easing.defaultEaseInElastic(x, t, b, c, d);
        };
        Easing.easeOutElastic = function (x, t, b, c, d) {
            return Easing.defaultEaseOutElastic(x, t, b, c, d);
        };
        Easing.easeInOutElastic = function (x, t, b, c, d) {
            return Easing.defaultEaseInOutElastic(x, t, b, c, d);
        };
        Easing.createEaseInBack = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                return c * (t /= d) * t * ((s + 1) * t - s) + b;
            };
        };
        Easing.createEaseOutBack = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            };
        };
        Easing.createEaseInOutBack = function (s) {
            if (s === void 0) { s = 1.70158; }
            return function (x, t, b, c, d) {
                if ((t /= d / 2) < 1)
                    return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            };
        };
        Easing.easeInBack = function (x, t, b, c, d) {
            return Easing.defaultEaseInElastic(x, t, b, c, d);
        };
        Easing.easeOutBack = function (x, t, b, c, d) {
            return Easing.defaultEaseOutBack(x, t, b, c, d);
        };
        Easing.easeInOutBack = function (x, t, b, c, d) {
            return Easing.defaultEaseInOutBack(x, t, b, c, d);
        };
        Easing.easeInBounce = function (x, t, b, c, d) {
            return c - Easing.easeOutBounce(x, d - t, 0, c, d) + b;
        };
        Easing.easeOutBounce = function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
            }
            else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
            }
        };
        Easing.easeInOutBounce = function (x, t, b, c, d) {
            if (t < d / 2)
                return Easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b;
            return Easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        };
        return Easing;
    }());
    Easing.defaultEaseInElastic = Easing.createEaseInElastic();
    Easing.defaultEaseOutElastic = Easing.createEaseOutElastic();
    Easing.defaultEaseInOutElastic = Easing.createEaseInOutElastic();
    Easing.defaultEaseInBack = Easing.createEaseInBack();
    Easing.defaultEaseOutBack = Easing.createEaseOutBack();
    Easing.defaultEaseInOutBack = Easing.createEaseInOutBack();
    cmd.Easing = Easing;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Event = (function () {
        function Event(type, target, data) {
            if (data === void 0) { data = null; }
            this.type = type;
            this.target = target;
            this.data = data;
        }
        Event.prototype.getType = function () { return this.type; };
        Event.prototype.getTarget = function () { return this.target; };
        Event.prototype.getData = function () { return this.data; };
        Event.prototype.setData = function (data) { this.data = data; };
        return Event;
    }());
    Event.COMPLETE = "complete";
    cmd.Event = Event;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var EventDispatcher = (function () {
        function EventDispatcher(target) {
            if (target === void 0) { target = null; }
            this.target = target || this;
            this.listeners = {};
        }
        EventDispatcher.prototype.addEventListener = function (eventType, listener) {
            if (typeof (listener) != "function")
                return;
            var listeners = this.listeners[eventType];
            if (listeners) {
                var numListeners = listeners.length;
                for (var i = 0; i < numListeners; ++i) {
                    if (listener == listeners[i])
                        return;
                }
            }
            else {
                this.listeners[eventType] = listeners = [];
            }
            listeners.push(listener);
        };
        EventDispatcher.prototype.removeEventListener = function (eventType, listener) {
            if (typeof (listener) != "function")
                return;
            var listeners = this.listeners[eventType];
            if (listeners) {
                var numListeners = listeners.length;
                for (var i = 0; i < numListeners; ++i) {
                    if (listener == listeners[i]) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
                if (listeners.length == 0) {
                    delete this.listeners[eventType];
                }
            }
        };
        EventDispatcher.prototype.removeAllEventListener = function (eventType) {
            if (eventType === void 0) { eventType = null; }
            if (eventType) {
                delete this.listeners[eventType];
            }
            else {
                this.listeners = {};
            }
        };
        EventDispatcher.prototype.hasEventListener = function (eventType) {
            return this.listeners[eventType] != null;
        };
        EventDispatcher.prototype.dispatchEvent = function (event) {
            var listeners = this.listeners[event.getType()];
            if (listeners) {
                var numListeners = listeners.length;
                for (var i = 0; i < numListeners; ++i) {
                    listeners[i].call(this.target, event);
                }
            }
        };
        return EventDispatcher;
    }());
    cmd.EventDispatcher = EventDispatcher;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Command = (function (_super) {
        __extends(Command, _super);
        function Command(executeFunction, interruptFunction, destroyFunction) {
            if (executeFunction === void 0) { executeFunction = null; }
            if (interruptFunction === void 0) { interruptFunction = null; }
            if (destroyFunction === void 0) { destroyFunction = null; }
            var _this = _super.call(this) || this;
            _this.setExecuteFunction(executeFunction);
            _this.setInterruptFunction(interruptFunction);
            _this.setDestroyFunction(destroyFunction);
            _this.state = cmd.CommandState.Sleeping;
            _this.self = _this;
            _this.parent = null;
            return _this;
        }
        Command.prototype.execute = function () {
            if (this.state > cmd.CommandState.Sleeping) {
                throw new Error('[Command.execute] + Command is already executing.');
            }
            this.state = cmd.CommandState.Executing;
            this.getExecuteFunction().call(this, this);
        };
        Command.prototype.interrupt = function () {
            if (this.state == cmd.CommandState.Executing) {
                this.state = cmd.CommandState.Interrupting;
                this.getInterruptFunction().call(this, this);
            }
        };
        Command.prototype.destroy = function () {
            this.state = cmd.CommandState.Sleeping;
            this.getDestroyFunction().call(this, this);
            this.parent = null;
            this.executeFunction = null;
            this.interruptFunction = null;
            this.destroyFunction = null;
        };
        Command.prototype.notifyComplete = function () {
            switch (this.state) {
                case cmd.CommandState.Sleeping:
                    break;
                case cmd.CommandState.Executing:
                    this.dispatchEvent(new cmd.Event(cmd.Event.COMPLETE, this));
                    this.destroy();
                    break;
                case cmd.CommandState.Interrupting:
                    this.dispatchEvent(new cmd.Event(cmd.Event.COMPLETE, this));
                    this.destroy();
                    break;
            }
        };
        Command.prototype.implExecuteFunction = function (command) {
            this.notifyComplete();
        };
        Command.prototype.implInterruptFunction = function (command) {
        };
        Command.prototype.implDestroyFunction = function (command) {
        };
        Command.prototype.getExecuteFunction = function () { return this.executeFunction || this.implExecuteFunction; };
        ;
        Command.prototype.setExecuteFunction = function (func) { this.executeFunction = func; };
        Command.prototype.getInterruptFunction = function () { return this.interruptFunction || this.implInterruptFunction; };
        ;
        Command.prototype.setInterruptFunction = function (func) { this.interruptFunction = func; };
        Command.prototype.getDestroyFunction = function () { return this.destroyFunction || this.implDestroyFunction; };
        ;
        Command.prototype.setDestroyFunction = function (func) { this.destroyFunction = func; };
        Command.prototype.getState = function () { return this.state; };
        Command.prototype.getParent = function () { return this.parent; };
        Command.prototype.setParent = function (parent) { this.parent = parent; };
        Command.prototype.getSelf = function () { return this.self; };
        return Command;
    }(cmd.EventDispatcher));
    cmd.Command = Command;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var CommandList = (function (_super) {
        __extends(CommandList, _super);
        function CommandList() {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            var _this = _super.call(this) || this;
            _this.commands = [];
            _this.addCommand.apply(_this, commands);
            return _this;
        }
        CommandList.prototype.addCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            if (commands.length > 0) {
                this.preProcess(commands);
                this.commands = this.getCommands().concat(commands);
            }
        };
        CommandList.prototype.insertCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            this.insertCommandAt.apply(this, [0].concat(commands));
        };
        CommandList.prototype.insertCommandAt = function (index) {
            var commands = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                commands[_i - 1] = arguments[_i];
            }
            if (commands.length > 0) {
                this.preProcess(commands);
                Array.prototype.splice.apply(this.getCommands(), [index, 0].concat(commands));
            }
        };
        CommandList.prototype.addCommandArray = function (commands) {
            this.addCommand.apply(this, commands);
        };
        CommandList.prototype.insertCommandArray = function (commands) {
            this.insertCommand.apply(this, commands);
        };
        CommandList.prototype.insertCommandArrayAt = function (index, commands) {
            this.insertCommandAt.apply(this, [index].concat(commands));
        };
        CommandList.prototype.getLength = function () {
            return this.commands.length;
        };
        CommandList.prototype.getCommandByIndex = function (index) { return this.commands[index]; };
        CommandList.prototype.getCommands = function () { return this.commands; };
        CommandList.prototype.preProcess = function (commands) {
            var numCommands = commands.length;
            var command;
            for (var i = 0; i < numCommands; ++i) {
                command = commands[i];
                if (typeof (command) == "function")
                    commands[i] = command = new cmd.Func(command);
                command.setParent(this);
            }
        };
        CommandList.prototype.implExecuteFunction = function (command) {
            this.notifyComplete();
        };
        CommandList.prototype.implInterruptFunction = function (command) {
        };
        CommandList.prototype.implDestroyFunction = function (command) {
        };
        return CommandList;
    }(cmd.Command));
    cmd.CommandList = CommandList;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Break = (function (_super) {
        __extends(Break, _super);
        function Break() {
            return _super.call(this) || this;
        }
        Break.prototype.implExecuteFunction = function (command) {
            var func = this.getParent()["notifyBreak"];
            if (func)
                func();
            this.notifyComplete();
        };
        Break.prototype.implInterruptFunction = function (command) {
        };
        Break.prototype.implDestroyFunction = function (command) {
        };
        return Break;
    }(cmd.Command));
    cmd.Break = Break;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Return = (function (_super) {
        __extends(Return, _super);
        function Return() {
            return _super.call(this) || this;
        }
        Return.prototype.implExecuteFunction = function (command) {
            var func = this.getParent()["notifyReturn"];
            if (func)
                func();
            this.notifyComplete();
        };
        Return.prototype.implInterruptFunction = function (command) {
        };
        Return.prototype.implDestroyFunction = function (command) {
        };
        return Return;
    }(cmd.Command));
    cmd.Return = Return;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Log = (function (_super) {
        __extends(Log, _super);
        function Log() {
            var messages = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                messages[_i] = arguments[_i];
            }
            var _this = _super.call(this) || this;
            _this.messages = messages;
            return _this;
        }
        Log.prototype.implExecuteFunction = function (command) {
            console.log.apply(console, Array.prototype.slice.call(this.messages));
            this.notifyComplete();
        };
        Log.prototype.implInterruptFunction = function (command) {
        };
        Log.prototype.implDestroyFunction = function (command) {
            this.messages = null;
        };
        Log.prototype.getMessages = function () { return this.messages; };
        Log.prototype.setMessages = function (messages) { this.messages = messages; };
        return Log;
    }(cmd.Command));
    cmd.Log = Log;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Wait = (function (_super) {
        __extends(Wait, _super);
        function Wait(time) {
            if (time === void 0) { time = 1000; }
            var _this = _super.call(this) || this;
            _this.completeHandler = function (event) {
                _this.notifyComplete();
            };
            _this.time = time;
            _this.timerId = -1;
            return _this;
        }
        Wait.prototype.implExecuteFunction = function (command) {
            this.timerId = window.setTimeout(this.completeHandler, this.time);
        };
        Wait.prototype.implInterruptFunction = function (command) {
            this.cancel();
        };
        Wait.prototype.implDestroyFunction = function (command) {
            this.cancel();
        };
        Wait.prototype.cancel = function () {
            if (this.timerId != -1) {
                clearTimeout(this.timerId);
                this.timerId = -1;
            }
        };
        Wait.prototype.getTime = function () { return this.time; };
        Wait.prototype.setTime = function (time) { this.time = time; };
        return Wait;
    }(cmd.Command));
    cmd.Wait = Wait;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Func = (function (_super) {
        __extends(Func, _super);
        function Func(func, args, eventDispatcher, eventType) {
            if (func === void 0) { func = null; }
            if (args === void 0) { args = []; }
            if (eventDispatcher === void 0) { eventDispatcher = null; }
            if (eventType === void 0) { eventType = null; }
            var _this = _super.call(this) || this;
            _this.completeHandler = function (event) {
                _this.notifyComplete();
            };
            _this.func = func;
            _this.args = args;
            _this.eventDispatcher = eventDispatcher;
            _this.eventType = eventType;
            return _this;
        }
        Func.prototype.implExecuteFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.addEventListener(this.eventType, this.completeHandler);
                this.func.apply(this, this.args);
            }
            else {
                this.func.apply(this, this.args);
                this.notifyComplete();
            }
        };
        Func.prototype.implInterruptFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.removeEventListener(this.eventType, this.completeHandler);
            }
        };
        Func.prototype.implDestroyFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.removeEventListener(this.eventType, this.completeHandler);
            }
            this.func = null;
            this.args = null;
            this.eventDispatcher = null;
            this.eventType = null;
        };
        Func.prototype.getFunction = function () { return this.func; };
        Func.prototype.setFunction = function (func) { this.func = func; };
        Func.prototype.getArguments = function () { return this.args; };
        Func.prototype.setArguments = function (args) { this.args = args; };
        Func.prototype.getEventDispatcher = function () { return this.eventDispatcher; };
        Func.prototype.setEventDispatcher = function (eventDispatcher) { this.eventDispatcher = eventDispatcher; };
        Func.prototype.getEventType = function () { return this.eventType; };
        Func.prototype.setEventType = function (eventType) { this.eventType = eventType; };
        return Func;
    }(cmd.Command));
    cmd.Func = Func;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Listen = (function (_super) {
        __extends(Listen, _super);
        function Listen(eventDispatcher, eventType) {
            if (eventDispatcher === void 0) { eventDispatcher = null; }
            if (eventType === void 0) { eventType = null; }
            var _this = _super.call(this) || this;
            _this.completeHandler = function (event) {
                _this.notifyComplete();
            };
            _this.eventDispatcher = eventDispatcher;
            _this.eventType = eventType;
            return _this;
        }
        Listen.prototype.implExecuteFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.addEventListener(this.eventType, this.completeHandler);
            }
        };
        Listen.prototype.implInterruptFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.removeEventListener(this.eventType, this.completeHandler);
            }
        };
        Listen.prototype.implDestroyFunction = function (command) {
            if (this.eventDispatcher && this.eventType) {
                this.eventDispatcher.removeEventListener(this.eventType, this.completeHandler);
            }
            this.eventType = null;
            this.eventDispatcher = null;
        };
        Listen.prototype.getEventDispatcher = function () { return this.eventDispatcher; };
        Listen.prototype.setEventDispatcher = function (eventDispatcher) { this.eventDispatcher = eventDispatcher; };
        Listen.prototype.getEventType = function () { return this.eventType; };
        Listen.prototype.setEventType = function (eventType) { this.eventType = eventType; };
        return Listen;
    }(cmd.Command));
    cmd.Listen = Listen;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Tween = (function (_super) {
        __extends(Tween, _super);
        function Tween(target, to, from, duration, easing, onStart, onUpdate, onComplete) {
            if (from === void 0) { from = null; }
            if (duration === void 0) { duration = 1000; }
            if (easing === void 0) { easing = cmd.Easing.linear; }
            if (onStart === void 0) { onStart = null; }
            if (onUpdate === void 0) { onUpdate = null; }
            if (onComplete === void 0) { onComplete = null; }
            var _this = _super.call(this) || this;
            _this.intervalHandler = function () {
                var elapsedTime = new Date().getTime() - _this.startTime;
                if (elapsedTime < _this.duration) {
                    _this.apply(elapsedTime / _this.duration);
                    if (_this.onUpdate)
                        _this.onUpdate(_this.progressTime, _this.progressValue);
                }
                else {
                    _this.apply(1);
                    _this.cancel();
                    if (_this.onUpdate)
                        _this.onUpdate(_this.progressTime, _this.progressValue);
                    if (_this.onComplete)
                        _this.onComplete(_this.progressTime, _this.progressValue);
                    _this.notifyComplete();
                }
            };
            _this.tweenTarget = target;
            _this.to = to;
            _this.from = from;
            _this.duration = duration;
            _this.easing = easing;
            _this.onStart = onStart;
            _this.onUpdate = onUpdate;
            _this.onComplete = onComplete;
            _this.progressTime = 0;
            _this.progressValue = 0;
            _this.startTime = 0;
            _this.timerId = -1;
            return _this;
        }
        Tween.prototype.implExecuteFunction = function (command) {
            this.internalFrom = {};
            var value0;
            var value1;
            for (var key in this.to) {
                value1 = this.to[key];
                if (this.from && this.from[key] != null) {
                    this.internalFrom[key] = this.from[key];
                }
                else {
                    this.internalFrom[key] = this.tweenTarget[key];
                }
            }
            if (this.duration > 0) {
                this.timerId = window.setInterval(this.intervalHandler, Tween.updateInterval);
                this.startTime = new Date().getTime();
                this.apply(0);
                if (this.onStart)
                    this.onStart(this.progressTime, this.progressValue);
            }
            else {
                this.apply(0);
                if (this.onStart)
                    this.onStart(this.progressTime, this.progressValue);
                this.apply(1);
                if (this.onUpdate)
                    this.onUpdate(this.progressTime, this.progressValue);
                if (this.onComplete)
                    this.onComplete(this.progressTime, this.progressValue);
                this.notifyComplete();
            }
        };
        Tween.prototype.implInterruptFunction = function (command) {
            this.cancel();
        };
        Tween.prototype.implDestroyFunction = function (command) {
            this.cancel();
            this.tweenTarget = null;
            this.to = null;
            this.from = null;
            this.easing = null;
            this.onStart = null;
            this.onUpdate = null;
            this.onComplete = null;
            this.internalFrom = null;
        };
        Tween.prototype.cancel = function () {
            if (this.timerId != -1) {
                clearInterval(this.timerId);
                this.timerId = -1;
            }
        };
        Tween.prototype.apply = function (timeRatio) {
            this.progressTime = timeRatio;
            this.progressValue = this.easing(0, this.progressTime, 0, 1, 1);
            var value0;
            for (var key in this.to) {
                value0 = this.internalFrom[key];
                this.tweenTarget[key] = value0 + (this.to[key] - value0) * this.progressValue;
            }
        };
        Tween.prototype.getTarget = function () { return this.tweenTarget; };
        Tween.prototype.setTarget = function (target) { this.tweenTarget = target; };
        Tween.prototype.getDuration = function () { return this.duration; };
        Tween.prototype.setDuration = function (duration) { this.duration = duration; };
        Tween.prototype.getTo = function () { return this.to; };
        Tween.prototype.setTo = function (to) { this.to = to; };
        Tween.prototype.getFrom = function () { return this.from; };
        Tween.prototype.setFrom = function (from) { this.from = from; };
        Tween.prototype.getEasing = function () { return this.easing; };
        Tween.prototype.setEasing = function (easing) { this.easing = easing; };
        Tween.prototype.getOnStart = function () { return this.onStart; };
        Tween.prototype.setOnStart = function (func) { this.onStart = func; };
        Tween.prototype.getOnUpdate = function () { return this.onUpdate; };
        Tween.prototype.setOnUpdate = function (func) { this.onUpdate = func; };
        Tween.prototype.getOnComplete = function () { return this.onComplete; };
        Tween.prototype.setOnComplete = function (func) { this.onComplete = func; };
        Tween.prototype.getProgressTime = function () { return this.progressTime; };
        Tween.prototype.getProgressValue = function () { return this.progressValue; };
        Tween.prototype.getUpdateInterval = function () { return Tween.updateInterval; };
        Tween.prototype.setUpdateInterval = function (milliseconds) { Tween.updateInterval = milliseconds; };
        return Tween;
    }(cmd.Command));
    Tween.updateInterval = 1000 / 60;
    cmd.Tween = Tween;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Serial = (function (_super) {
        __extends(Serial, _super);
        function Serial() {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            var _this = _super.apply(this, commands) || this;
            _this.completeHandler = function (event) {
                _this.currentCommand.removeEventListener(cmd.Event.COMPLETE, _this.completeHandler);
                _this.currentCommand = null;
                if (++_this.position >= _this.getLength()) {
                    _this.notifyComplete();
                }
                else {
                    _this.next();
                }
            };
            _this.currentCommand = null;
            _this.position = -1;
            _this.isPaused = false;
            _this.isCompleteOnPaused = false;
            return _this;
        }
        Serial.prototype.addCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            _super.prototype.addCommand.apply(this, commands);
        };
        Serial.prototype.insertCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            _super.prototype.insertCommandAt.apply(this, [this.position + 1].concat(commands));
        };
        Serial.prototype.addCommandArray = function (commands) {
            this.addCommand.apply(this, commands);
        };
        Serial.prototype.insertCommandArray = function (commands) {
            this.insertCommand.apply(this, commands);
        };
        Serial.prototype.next = function () {
            this.currentCommand = this.getCommandByIndex(this.position);
            this.currentCommand.addEventListener(cmd.Event.COMPLETE, this.completeHandler);
            this.currentCommand.execute();
        };
        Serial.prototype.implExecuteFunction = function (command) {
            this.position = 0;
            if (this.getLength() > 0) {
                this.next();
            }
            else {
                this.notifyComplete();
            }
        };
        Serial.prototype.implInterruptFunction = function (command) {
            if (this.currentCommand) {
                this.currentCommand.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                this.currentCommand.interrupt();
                this.currentCommand = null;
            }
            this.position = -1;
            _super.prototype.implInterruptFunction.call(this, command);
        };
        Serial.prototype.implDestroyFunction = function (command) {
            if (this.currentCommand) {
                this.currentCommand.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                this.currentCommand.destroy();
                this.currentCommand = null;
            }
            this.position = -1;
            this.isPaused = false;
            this.isCompleteOnPaused = false;
            _super.prototype.implDestroyFunction.call(this, command);
        };
        Serial.prototype.implNotifyBreak = function () {
            if (this.currentCommand.getState() == cmd.CommandState.Executing) {
                this.currentCommand.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                this.currentCommand.interrupt();
            }
            this.notifyComplete();
        };
        Serial.prototype.implNotifyReturn = function () {
            if (this.currentCommand.getState() == cmd.CommandState.Executing) {
                this.currentCommand.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                this.currentCommand.interrupt();
            }
            var func = this.getParent()["notifyReturn"];
            if (func)
                func();
            this.destroy();
        };
        Serial.prototype.getPosition = function () { return this.position; };
        return Serial;
    }(cmd.CommandList));
    cmd.Serial = Serial;
})(cmd || (cmd = {}));
var cmd;
(function (cmd) {
    var Parallel = (function (_super) {
        __extends(Parallel, _super);
        function Parallel() {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            var _this = _super.apply(this, commands) || this;
            _this.completeHandler = function (event) {
                if (++_this.completeCount >= _this.getLength()) {
                    _this.notifyComplete();
                }
            };
            _this.completeCount = 0;
            return _this;
        }
        Parallel.prototype.addCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            _super.prototype.addCommand.apply(this, commands);
        };
        Parallel.prototype.insertCommand = function () {
            var commands = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                commands[_i] = arguments[_i];
            }
            this.addCommand.apply(this, commands);
        };
        Parallel.prototype.addCommandArray = function (commands) {
            this.addCommand.apply(this, commands);
        };
        Parallel.prototype.insertCommandArray = function (commands) {
            this.addCommand.apply(this, commands);
        };
        Parallel.prototype.implExecuteFunction = function (command) {
            this.completeCount = 0;
            var length = this.getLength();
            if (length > 0) {
                var commands = this.getCommands();
                var command_1;
                for (var i = 0; i < length; ++i) {
                    command_1 = commands[i];
                    command_1.addEventListener(cmd.Event.COMPLETE, this.completeHandler);
                    command_1.execute();
                }
            }
            else {
                this.notifyComplete();
            }
        };
        Parallel.prototype.implInterruptFunction = function (command) {
            var length = this.getLength();
            if (length > 0) {
                var commands = this.getCommands();
                var command_2;
                for (var i = 0; i < length; ++i) {
                    command_2 = commands[i];
                    command_2.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                    command_2.interrupt();
                }
            }
            _super.prototype.implInterruptFunction.call(this, command);
        };
        Parallel.prototype.implDestroyFunction = function (command) {
            var length = this.getLength();
            if (length > 0) {
                var commands = this.getCommands();
                var command_3;
                for (var i = 0; i < length; ++i) {
                    command_3 = commands[i];
                    command_3.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                    command_3.destroy();
                }
            }
            _super.prototype.implDestroyFunction.call(this, command);
        };
        Parallel.prototype.implNotifyBreak = function () {
            var length = this.getLength();
            if (length > 0) {
                var commands = this.getCommands();
                var command = void 0;
                for (var i = 0; i < length; ++i) {
                    command = commands[i];
                    if (command.getState() == cmd.CommandState.Executing) {
                        command.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                        command.interrupt();
                    }
                }
            }
            this.notifyComplete();
        };
        Parallel.prototype.implNotifyReturn = function () {
            var length = this.getLength();
            if (length > 0) {
                var commands = this.getCommands();
                var command = void 0;
                for (var i = 0; i < length; ++i) {
                    command = commands[i];
                    if (command.getState() == cmd.CommandState.Executing) {
                        command.removeEventListener(cmd.Event.COMPLETE, this.completeHandler);
                        command.interrupt();
                    }
                }
            }
            var func = this.getParent()["notifyReturn"];
            if (func)
                func();
            this.destroy();
        };
        Parallel.prototype.getCompleteCount = function () { return this.completeCount; };
        return Parallel;
    }(cmd.CommandList));
    cmd.Parallel = Parallel;
})(cmd || (cmd = {}));

//# sourceMappingURL=command.js.map
