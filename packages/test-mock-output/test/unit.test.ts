/* eslint-disable no-console */
// * These tests ensure the exported interface under test functions as expected.

import {
  error as nodeError,
  info as nodeInfo,
  log as nodeLog,
  warn as nodeWarn
} from 'node:console';

import { withMockedOutput } from 'universe+test-mock-output';

describe('::withMockedOutput', () => {
  it('captures log/warn/error/info and stdout/stderr output', async () => {
    expect.hasAssertions();

    await withMockedOutput(
      ({
        errorSpy,
        infoSpy,
        logSpy,
        stderrSpy,
        stdoutSpy,
        warnSpy,
        nodeErrorSpy,
        nodeInfoSpy,
        nodeLogSpy,
        nodeWarnSpy
      }) => {
        console.error(1);
        console.info(2);
        console.log(3);
        console.warn(4);

        process.stderr.write('5');
        process.stdout.write('6');

        nodeError(7);
        nodeInfo(8);
        nodeLog(9);
        nodeWarn(10);

        expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
        expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
        expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
        expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
        expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
        expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
        expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
        expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
        expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
        expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
      }
    );
  });

  it('respects passthroughOutputIfDebugging', async () => {
    expect.hasAssertions();

    let callCount = 0;
    const originalDebug = process.env.DEBUG;
    const originalConsoleLog = console.log;

    const consoleLogMock = () => {
      callCount += 1;
    };

    console.log = consoleLogMock;

    try {
      delete process.env.DEBUG;

      await withMockedOutput(({ logSpy }) => {
        console.log(1);
        expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
      });

      expect(callCount).toBe(0);

      process.env.DEBUG = 'true';

      await withMockedOutput(({ logSpy }) => {
        console.log(1);
        expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
      });

      expect(callCount).toBe(1);

      await withMockedOutput(
        ({ logSpy }) => {
          console.log(1);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
        },
        { passthroughOutputIfDebugging: true }
      );

      expect(callCount).toBe(2);

      await withMockedOutput(
        ({ logSpy }) => {
          console.log(1);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
        },
        { passthroughOutputIfDebugging: false }
      );

      expect(callCount).toBe(2);
    } finally {
      console.log = originalConsoleLog;

      if (originalDebug === undefined) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = originalDebug;
      }
    }
  });

  it('respects passthrough', async () => {
    expect.hasAssertions();

    let callCount = 0;
    const originalConsoleLog = console.log;

    const consoleLogMock = () => {
      callCount += 1;
    };

    console.log = consoleLogMock;

    try {
      await withMockedOutput(({ logSpy }) => {
        console.log(1);
        expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
      });

      expect(callCount).toBe(0);

      await withMockedOutput(
        ({ logSpy }) => {
          console.log(1);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
        },
        { passthrough: ['log'] }
      );

      expect(callCount).toBe(1);

      await withMockedOutput(
        ({ logSpy }) => {
          console.log(1);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(1);
        },
        { passthrough: [] }
      );

      expect(callCount).toBe(1);
    } finally {
      console.log = originalConsoleLog;
    }
  });

  it('throws if unexpected output is captured', async () => {
    expect.hasAssertions();

    await expect(
      withMockedOutput(async () => {
        console.error(1);
        console.info(2);
        console.log(3);
        console.warn(4);

        process.stderr.write('5');
        process.stdout.write('6');

        nodeError(7);
        nodeInfo(8);
        nodeLog(9);
        nodeWarn(10);
      })
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "logSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?3,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          infoSpy,
          errorSpy,
          stderrSpy,
          stdoutSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "logSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?3,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          infoSpy,
          logSpy,
          stderrSpy,
          stdoutSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "errorSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?1,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          logSpy,
          stderrSpy,
          stdoutSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "infoSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?2,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stderrSpy,
          stdoutSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "warnSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?4,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stdoutSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "stderrSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?"5",/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stderrSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "stdoutSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?"6",/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stdoutSpy,
          stderrSpy,
          warnSpy,
          nodeInfoSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "nodeErrorSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?7,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stdoutSpy,
          stderrSpy,
          warnSpy,
          nodeErrorSpy,
          nodeLogSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "nodeInfoSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?8,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stdoutSpy,
          stderrSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeWarnSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeWarnSpy).toHaveBeenCalledExactlyOnceWith(10);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "nodeLogSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?9,/
      )
    });

    await expect(
      withMockedOutput(
        ({
          errorSpy,
          infoSpy,
          logSpy,
          stdoutSpy,
          stderrSpy,
          warnSpy,
          nodeErrorSpy,
          nodeInfoSpy,
          nodeLogSpy
        }) => {
          console.error(1);
          console.info(2);
          console.log(3);
          console.warn(4);

          process.stderr.write('5');
          process.stdout.write('6');

          nodeError(7);
          nodeInfo(8);
          nodeLog(9);
          nodeWarn(10);

          expect(errorSpy).toHaveBeenCalledExactlyOnceWith(1);
          expect(infoSpy).toHaveBeenCalledExactlyOnceWith(2);
          expect(logSpy).toHaveBeenCalledExactlyOnceWith(3);
          expect(warnSpy).toHaveBeenCalledExactlyOnceWith(4);
          expect(stderrSpy).toHaveBeenCalledExactlyOnceWith('5');
          expect(stdoutSpy).toHaveBeenCalledExactlyOnceWith('6');
          expect(nodeErrorSpy).toHaveBeenCalledExactlyOnceWith(7);
          expect(nodeInfoSpy).toHaveBeenCalledExactlyOnceWith(8);
          expect(nodeLogSpy).toHaveBeenCalledExactlyOnceWith(9);
        }
      )
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"failing-spy": "nodeWarnSpy",(.|\n)*?"unexpected-output": Array \[(.|\n)*?Array \[(.|\n)*?10,/
      )
    });
  });
});
