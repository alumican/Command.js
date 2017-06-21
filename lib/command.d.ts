declare namespace cmd {
    enum CommandState {
        Sleeping = 0,
        Executing = 1,
        Interrupting = 2,
    }
}
declare namespace cmd {
    type EasingFunction = (x: number, t: number, b: number, c: number, d: number) => number;
    class Easing {
        static linear(x: number, t: number, b: number, c: number, d: number): number;
        static easeInQuad(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutQuad(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutQuad(x: number, t: number, b: number, c: number, d: number): number;
        static easeInCubic(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutCubic(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutCubic(x: number, t: number, b: number, c: number, d: number): number;
        static easeInQuart(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutQuart(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutQuart(x: number, t: number, b: number, c: number, d: number): number;
        static easeInQuint(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutQuint(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutQuint(x: number, t: number, b: number, c: number, d: number): number;
        static easeInSine(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutSine(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutSine(x: number, t: number, b: number, c: number, d: number): number;
        static easeInExpo(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutExpo(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutExpo(x: number, t: number, b: number, c: number, d: number): number;
        static easeInCirc(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutCirc(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutCirc(x: number, t: number, b: number, c: number, d: number): number;
        static createEaseInElastic(s?: number): EasingFunction;
        static createEaseOutElastic(s?: number): EasingFunction;
        static createEaseInOutElastic(s?: number): EasingFunction;
        static easeInElastic(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutElastic(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutElastic(x: number, t: number, b: number, c: number, d: number): number;
        private static defaultEaseInElastic;
        private static defaultEaseOutElastic;
        private static defaultEaseInOutElastic;
        static createEaseInBack(s?: number): EasingFunction;
        static createEaseOutBack(s?: number): EasingFunction;
        static createEaseInOutBack(s?: number): EasingFunction;
        static easeInBack(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutBack(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutBack(x: number, t: number, b: number, c: number, d: number): number;
        private static defaultEaseInBack;
        private static defaultEaseOutBack;
        private static defaultEaseInOutBack;
        static easeInBounce(x: number, t: number, b: number, c: number, d: number): number;
        static easeOutBounce(x: number, t: number, b: number, c: number, d: number): number;
        static easeInOutBounce(x: number, t: number, b: number, c: number, d: number): number;
    }
}
declare namespace cmd {
    interface Hash<T> {
        [key: string]: T;
    }
}
declare namespace cmd {
    class Event {
        static COMPLETE: string;
        constructor(type: string, target: object, data?: any);
        getType(): string;
        private type;
        getTarget(): object;
        private target;
        getData(): any;
        setData(data: any): void;
        private data;
    }
}
declare namespace cmd {
    type EventListener = (event: Event) => void;
    class EventDispatcher {
        constructor(target?: any);
        addEventListener(eventType: string, listener: EventListener): void;
        removeEventListener(eventType: string, listener: EventListener): void;
        removeAllEventListener(eventType?: string): void;
        hasEventListener(eventType: string): boolean;
        dispatchEvent(event: Event): void;
        private target;
        private listeners;
    }
}
declare namespace cmd {
    class Command extends EventDispatcher {
        constructor(executeFunction?: Function, interruptFunction?: Function, destroyFunction?: Function);
        execute(): void;
        interrupt(): void;
        destroy(): void;
        protected notifyComplete(): void;
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        getExecuteFunction(): Function;
        setExecuteFunction(func: Function): void;
        private executeFunction;
        getInterruptFunction(): Function;
        setInterruptFunction(func: Function): void;
        private interruptFunction;
        getDestroyFunction(): Function;
        setDestroyFunction(func: Function): void;
        private destroyFunction;
        getState(): CommandState;
        private state;
        getParent(): Command;
        setParent(parent: Command): void;
        private parent;
        getSelf(): Command;
        private self;
    }
}
declare namespace cmd {
    abstract class CommandList extends Command {
        constructor(...commands: (Command | Function)[]);
        addCommand(...commands: (Command | Function)[]): void;
        insertCommand(...commands: (Command | Function)[]): void;
        protected insertCommandAt(index: number, ...commands: (Command | Function)[]): void;
        addCommandArray(commands: (Command | Function)[]): void;
        insertCommandArray(commands: (Command | Function)[]): void;
        protected insertCommandArrayAt(index: number, commands: (Command | Function)[]): void;
        getLength(): number;
        private preProcess(commands);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        protected abstract implNotifyBreak(): void;
        protected abstract implNotifyReturn(): void;
        protected getCommandByIndex(index: number): Command;
        protected getCommands(): Command[];
        private commands;
    }
}
declare namespace cmd {
    class Break extends Command {
        constructor();
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
    }
}
declare namespace cmd {
    class Return extends Command {
        constructor();
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
    }
}
declare namespace cmd {
    class Log extends Command {
        constructor(...messages: any[]);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        getMessages(): any[];
        setMessages(messages: any[]): void;
        private messages;
    }
}
declare namespace cmd {
    class Wait extends Command {
        constructor(time?: number);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        private cancel();
        private completeHandler;
        getTime(): number;
        setTime(time: number): void;
        private time;
        private timerId;
    }
}
declare namespace cmd {
    class Func extends Command {
        constructor(func?: Function, args?: any[], eventDispatcher?: EventDispatcher, eventType?: string);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        private completeHandler;
        getFunction(): Function;
        setFunction(func: Function): void;
        private func;
        getArguments(): any[];
        setArguments(args: any[]): void;
        private args;
        getEventDispatcher(): EventDispatcher;
        setEventDispatcher(eventDispatcher: EventDispatcher): void;
        private eventDispatcher;
        getEventType(): string;
        setEventType(eventType: string): void;
        private eventType;
    }
}
declare namespace cmd {
    class Listen extends Command {
        constructor(eventDispatcher?: EventDispatcher, eventType?: string);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        private completeHandler;
        getEventDispatcher(): EventDispatcher;
        setEventDispatcher(eventDispatcher: EventDispatcher): void;
        private eventDispatcher;
        getEventType(): string;
        setEventType(eventType: string): void;
        private eventType;
    }
}
declare namespace cmd {
    type TweenCallbackFunction = (progressTime: number, progressValue: number) => void;
    class Tween extends Command {
        constructor(target: object, to: object, from?: object, duration?: number, easing?: EasingFunction, onStart?: TweenCallbackFunction, onUpdate?: TweenCallbackFunction, onComplete?: TweenCallbackFunction);
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        private cancel();
        private apply(timeRatio);
        private intervalHandler;
        getTarget(): object;
        setTarget(target: object): void;
        private tweenTarget;
        getDuration(): number;
        setDuration(duration: number): void;
        private duration;
        getTo(): object;
        setTo(to: object): void;
        private to;
        getFrom(): object;
        setFrom(from: object): void;
        private from;
        getEasing(): EasingFunction;
        setEasing(easing: EasingFunction): void;
        private easing;
        getOnStart(): TweenCallbackFunction;
        setOnStart(func: TweenCallbackFunction): void;
        private onStart;
        getOnUpdate(): TweenCallbackFunction;
        setOnUpdate(func: TweenCallbackFunction): void;
        private onUpdate;
        getOnComplete(): TweenCallbackFunction;
        setOnComplete(func: TweenCallbackFunction): void;
        private onComplete;
        getProgressTime(): number;
        private progressTime;
        getProgressValue(): number;
        private progressValue;
        private startTime;
        private timerId;
        private internalFrom;
    }
}
declare namespace cmd {
    class Serial extends CommandList {
        constructor(...commands: (Command | Function)[]);
        addCommand(...commands: (Command | Function)[]): void;
        insertCommand(...commands: (Command | Function)[]): void;
        addCommandArray(commands: (Command | Function)[]): void;
        insertCommandArray(commands: (Command | Function)[]): void;
        private next();
        private completeHandler;
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        protected implNotifyBreak(): void;
        protected implNotifyReturn(): void;
        protected getPosition(): number;
        private position;
        private currentCommand;
        private isPaused;
        private isCompleteOnPaused;
    }
}
declare namespace cmd {
    class Parallel extends CommandList {
        constructor(...commands: (Command | Function)[]);
        addCommand(...commands: (Command | Function)[]): void;
        insertCommand(...commands: (Command | Function)[]): void;
        addCommandArray(commands: (Command | Function)[]): void;
        insertCommandArray(commands: (Command | Function)[]): void;
        private completeHandler;
        protected implExecuteFunction(command: Command): void;
        protected implInterruptFunction(command: Command): void;
        protected implDestroyFunction(command: Command): void;
        protected implNotifyBreak(): void;
        protected implNotifyReturn(): void;
        protected getCompleteCount(): number;
        private completeCount;
        private currentCommand;
        private isPaused;
        private isCompleteOnPaused;
    }
}
