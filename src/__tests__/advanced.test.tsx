import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import * as utils from "../utils";

const renderLogMock = vi.spyOn(utils, "renderLog");
const generateItemsSpy = vi.spyOn(utils, "generateItems");

describe("최적화된 App 컴포넌트 테스트", () => {
  beforeEach(() => {
    renderLogMock.mockClear();
    generateItemsSpy.mockClear();
  });

  

  it("로그인/로그아웃 시 Header, ComplexForm, NotificationSystem만 리렌더링되어야 한다", async () => {
    render(<App />);
    renderLogMock.mockClear();

    const loginButton = await screen.findByText("로그인");
    await fireEvent.click(loginButton);

    // Header가 변경 되면 알림이 발생하고, 알림 정보를 CompleteForm과 NotificationSystem이 가져다 사용 중
    expect(renderLogMock).toHaveBeenCalledWith("Header rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ComplexForm rendered");
    expect(renderLogMock).toHaveBeenCalledWith("NotificationSystem rendered");
    expect(renderLogMock).toHaveBeenCalledWith("ItemList rendered");
    expect(renderLogMock).toHaveBeenCalledTimes(4);
    renderLogMock.mockClear();
  });
});
