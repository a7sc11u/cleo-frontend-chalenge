import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";
import { forwardRefWithAs } from "@radix-ui/react-polymorphic";

import {
  RovingTabIndexProvider,
  useRovingTabIndex,
  useFocusEffect,
} from "react-roving-tabindex";

/** -------------------------------------------------------------------
 * TabsContext
 *
 * Shared Context state to manage selected tabs
 * ------------------------------------------------------------------- */

type TTabsContext = {
  id: string;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
};

export const TabsContext = createContext<TTabsContext>({
  id: "tabs",
  selectedValue: "",
  setSelectedValue: () => null,
});

/** -------------------------------------------------------------------
 * useTabsContext
 *
 * Hook to use tab context within the tab tree
 * ------------------------------------------------------------------- */

export const useTabsContext = () => useContext(TabsContext);

/** -------------------------------------------------------------------
 * Root
 *
 * Root component and TabContext Provider
 * Contains tablist and tab panels.
 * ------------------------------------------------------------------- */

type TTabRootOwnProps = {
  id: string;
  value: string;
  children: React.ReactNode;
};

const TabRoot: React.FC<TTabRootOwnProps> = (props: TTabRootOwnProps) => {
  const { id, value, children, ...rest } = props;

  const [selectedValue, setSelectedValue] = useState<string>(value);

  const ctx: TTabsContext = { id, selectedValue, setSelectedValue };

  return (
    <div id={id} {...rest}>
      <TabsContext.Provider value={ctx}>{children}</TabsContext.Provider>
    </div>
  );
};

/** -------------------------------------------------------------------
 * TabList
 *
 * A set of tab elements contained in a tablist element.
 * ------------------------------------------------------------------- */

type TTabListOwnProps = {
  orientation?: "vertical" | "horizontal";
  title: string;
  children: React.ReactNode;
};

const TABLIST_TAG = "div";

const TabList = forwardRefWithAs<typeof TABLIST_TAG, TTabListOwnProps>(
  (props, ref) => {
    const {
      as: Comp = TABLIST_TAG,
      title,
      orientation = "horizontal",
      children,
      ...rest
    } = props;

    return (
      <Comp
        ref={ref}
        role="tablist"
        aria-label={title}
        aria-orientation={orientation}
        {...rest}
      >
        <RovingTabIndexProvider direction={orientation}>
          {children}
        </RovingTabIndexProvider>
      </Comp>
    );
  }
);

/** -------------------------------------------------------------------
 * Tab
 *
 * An element in the tab list that serves as a label for one of the tab panels * and can be activated to display that panel.
 * ------------------------------------------------------------------- */

type TTabOwnProps = {
  children: React.ReactNode;
  disabled?: boolean;
  value: string;
};

const Tab: React.FC<TTabOwnProps> = (props: TTabOwnProps) => {
  const { value, disabled = false, children, ...rest } = props;

  const ref = useRef<HTMLButtonElement>(null);
  const { id, selectedValue, setSelectedValue } = useTabsContext();

  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(
    ref,
    disabled
  );

  useFocusEffect(focused, ref);

  const handleButtonClick = useCallback(() => {
    handleClick();
    setSelectedValue(value);
  }, [handleClick, value, setSelectedValue]);

  return (
    <button
      {...rest}
      role="tab"
      ref={ref}
      tabIndex={tabIndex}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onClick={handleButtonClick}
      aria-selected={selectedValue === value}
      id={`${id}-tab-${value}`}
      aria-controls={`${id}-panel-${value}`}
    >
      {children}
    </button>
  );
};

/** -------------------------------------------------------------------
 * TabPanel
 *
 * The element that contains the content associated with a tab.
 * ------------------------------------------------------------------- */

type TPanelOwnProps = {
  children: React.ReactNode;
  value: string;
};

const TabPanel: React.FC<TPanelOwnProps> = (props: TPanelOwnProps) => {
  const { id, selectedValue } = useTabsContext();
  const { value, children } = props;

  return (
    <div
      tabIndex={0}
      role="tabpanel"
      id={`${id}-panel-${value}`}
      aria-labelledby={`${id}-tab-${value}`}
      hidden={value !== selectedValue}
    >
      {children}
    </div>
  );
};

export { TabRoot, TabList, Tab, TabPanel };
export default { TabRoot, TabList, Tab, TabPanel };
