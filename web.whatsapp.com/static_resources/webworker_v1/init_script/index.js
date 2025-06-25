self.window = self;

function
doImportScripts(a) {
    if (self.trustedTypes && self.trustedTypes.createPolicy) {
        var
            b = self.trustedTypes.createPolicy("workerPolicy", {
                createScriptURL: function (a) {
                    return
                    a
                }
            });
        importScripts(b.createScriptURL(a))
    } else importScripts(a)
}

function
generateWorkerID() {
    var
        a = Math.floor(Math.random() * Math.pow(36, 6));
    a = a.toString(36);
    return "0".repeat(6 - a.length) + a
}
if ("SharedWorkerGlobalScope" in
    self && self instanceof self.SharedWorkerGlobalScope) {
    var
        portsBuffer = [],
        messageBuffer = [],
        unsubscribeCleanupFunctions = [],
        hasRun = !1,
        initAttemptCount = 0;
    self.setTimeout(function () {
        if (!hasRun) {
            try {
                var
                    a;
                (a = portsBuffer[0]) == null ? void
                0: a.postMessage({
                    type: "self-terminate",
                    response: {
                        from: "init-v1"
                    }
                })
            } catch (a) {}
            self.close()
        }
    }, 3e5);
    self.shared_worker_bootstrap_buffer = function () {
        hasRun;
        hasRun = !0;
        while (unsubscribeCleanupFunctions.length) try {
            var
                a = unsubscribeCleanupFunctions.pop();
            a()
        } catch (a) {}
        a = portsBuffer;
        var
            b = messageBuffer;
        messageBuffer = [];
        portsBuffer = [];
        return {
            ports: a,
            messages: b
        }
    };
    var
        connectListener = function (a) {
            self.worker_id == null && (self.worker_id = generateWorkerID());
            var
                b = {},
                c = a.ports[0];
            c.postMessage({
                type: "connection-ack",
                response: {
                    from: "initScript",
                    workerID: self.worker_id
                }
            });
            var
                d = function (d) {
                    b.c || (b.c = !0, c.postMessage({
                        type: "worker-init-mark",
                        response: {
                            point: "c"
                        }
                    }));
                    var
                        e = d.data;
                    if (typeof e === "object" && (e == null ? void 0 : e.type) === "execute-worker") {
                        b.d || (b.d = !0, c.postMessage({
                            type: "worker-init-mark",
                            response: {
                                point: "d"
                            }
                        }));
                        e = e.args
                        instanceof Array ? e.args : null;
                        if (e == null || typeof e[0] !== "object") return;
                        var
                            f = e[0];
                        e = e[1];
                        e === !0 && (self.__DEV__ = 1);
                        messageBuffer.push({
                            e: d,
                            port: c
                        });
                        b.e || (b.e = !0, c.postMessage({
                            type: "worker-init-mark",
                            response: {
                                point: "e"
                            }
                        }));
                        try {
                            doImportScripts(f.url), c.postMessage({
                                type: "execute-worker-imports",
                                response: {
                                    attempts: ++initAttemptCount
                                }
                            })
                        } catch (a) {
                            c.postMessage({
                                type: "execute-worker-imports",
                                response: {
                                    err: a.message,
                                    attempts: ++initAttemptCount
                                }
                            })
                        }
                    } else
                        messageBuffer.push({
                            e: d,
                            port: c
                        })
                };
            b.a || (b.a = !0, c.postMessage({
                type: "worker-init-mark",
                response: {
                    point: "a"
                }
            }));
            c.addEventListener("message", d);
            unsubscribeCleanupFunctions.push(function () {
                return
                c.removeEventListener("message", d)
            });
            c.start();
            portsBuffer.push(c);
            b.b || (b.b = !0, c.postMessage({
                type: "worker-init-mark",
                response: {
                    point: "b"
                }
            }))
        };
    self.addEventListener("connect", connectListener);
    unsubscribeCleanupFunctions.push(function () {
        return
        self.removeEventListener("connect", connectListener)
    })
} else {
    var
        initMessageHandler = function (a) {
            a = a.data;
            if (typeof a === "object" && (a == null ? void 0 : a.type) === "sr-init" && typeof a.bundleUrl === "string" && typeof a.resource === "object") {
                a.isDev === !0 && (self.__DEV__ = !0);
                if (a.logImportScriptsErrors === !0) try {
                    doImportScripts(a.bundleUrl), self.postMessage({
                        type: "importScripts_success"
                    })
                } catch (c) {
                    var
                        b = self.performance && self.performance.getEntriesByName && self.performance.getEntriesByName(a.bundleUrl);
                    b = b && b[0];
                    self.postMessage({
                        type: "importScripts_error",
                        source: "init_script",
                        error_msg: c && c.message,
                        error_code: c && (c == null ? void 0 : c.code),
                        error_name: c && (c == null ? void 0 : c.name),
                        stack: c && c.stack,
                        perfEntry: b ? {
                            responseStatus: b.responseStatus,
                            encodedBodySize: b.encodedBodySize,
                            transferSize: b.transferSize,
                            duration: b.duration
                        } : null
                    });
                    throw
                    c
                } else
                    doImportScripts(a.bundleUrl);
                if (a.doNotStartBundle !== !0) {
                    StartBundle.apply(void 0, [a.resource].concat((b = a.initArgs) != null ? b : []))
                }
                self.removeEventListener("message", initMessageHandler)
            }
        };
    self.addEventListener("message", initMessageHandler)
}