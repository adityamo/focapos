"use client";
import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiLink2,
  FiCode,
  FiList,
  FiRotateCcw,
  FiRotateCw,
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
} from "react-icons/fi";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";

interface TiptapProps {
  label: string;
  initialContent?: string;
  onChange: (content: string) => void; // Callback for content change
  onError: boolean;
}

// eslint-disable-next-line react/prop-types
const Tiptap = ({ label, initialContent, onChange, onError }: TiptapProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      BulletList,
      OrderedList,
      ListItem,
      TextAlign.configure({
        types: ["heading", "paragraph"], // You can add more types if needed
      }),
    ],
    content: initialContent, // Set initial content
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleItalic = () => editor?.chain().focus().toggleItalic().run();
  const handleUnderline = () => editor?.chain().focus().toggleUnderline().run();
  const handleStrike = () => editor?.chain().focus().toggleStrike().run();

  const handleLink = () => {
    const url = prompt("URL");
    if (url) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  };

  const handleOrderedList = () =>
    editor?.chain().focus().toggleList("orderedList", "listItem").run();

  const handleBulletList = () =>
    editor?.chain().focus().toggleList("bulletList", "listItem").run();

  const handleBlockquote = () =>
    editor?.chain().focus().toggleBlockquote().run();
  const handleCode = () => editor?.chain().focus().toggleCode().run();
  const handleTextAlign = (align: "left" | "center" | "right" | "justify") => {
    editor?.chain().focus().setTextAlign(align).run();
  };
  // Undo and Redo handlers
  const handleUndo = () => editor?.chain().focus().undo().run();
  const handleRedo = () => editor?.chain().focus().redo().run();

  return (
    <div>
      <label className="block text-sm text-slate-700 font-medium mb-2 dark:text-white">
        {label}
      </label>
      <div
        className={`border ${onError ? "border-red-600" : "border-gray-200"} rounded-xl overflow-hidden dark:border-neutral-700`}
      >
        <div id="hs-editor-tiptap">
          <div className="flex align-middle gap-x-0.5 border-b border-gray-200 p-2">
            <button type="button" onClick={handleBold} className="size-8 ">
              <FiBold />
            </button>
            <button type="button" onClick={handleItalic} className="size-8 ">
              <FiItalic />
            </button>
            <button type="button" onClick={handleUnderline} className="size-8 ">
              <FiUnderline />
            </button>
            <button type="button" onClick={handleStrike} className="size-8 ">
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4H9a3 3 0 0 0-2.83 4"></path>
                <path d="M14 12a4 4 0 0 1 0 8H6"></path>
                <line x1="4" x2="20" y1="12" y2="12"></line>
              </svg>
            </button>
            <button type="button" onClick={handleLink} className="size-8 ">
              <FiLink2 />
            </button>
            <button
              type="button"
              onClick={() => handleTextAlign("left")}
              className="size-8"
            >
              <FiAlignLeft />
            </button>
            <button
              type="button"
              onClick={() => handleTextAlign("center")}
              className="size-8"
            >
              <FiAlignCenter />
            </button>
            <button
              type="button"
              onClick={() => handleTextAlign("right")}
              className="size-8"
            >
              <FiAlignRight />
            </button>
            <button
              type="button"
              onClick={() => handleTextAlign("justify")}
              className="size-8"
            >
              <FiAlignJustify />
            </button>
            <button type="button" onClick={handleCode} className="size-8 ">
              <FiCode />
            </button>
            <button type="button" onClick={handleUndo} className="size-8">
              <FiRotateCcw />
            </button>
            <button type="button" onClick={handleRedo} className="size-8">
              <FiRotateCw />
            </button>

            <button
              type="button"
              onClick={handleOrderedList}
              className="size-8 invisible "
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="10" x2="21" y1="6" y2="6"></line>
                <line x1="10" x2="21" y1="12" y2="12"></line>
                <line x1="10" x2="21" y1="18" y2="18"></line>
                <path d="M4 6h1v4"></path>
                <path d="M4 10h2"></path>
                <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={handleBulletList}
              className="size-8 invisible "
            >
              <FiList />
            </button>
            <button
              type="button"
              onClick={handleBlockquote}
              className="size-8 invisible "
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 6H3"></path>
                <path d="M21 12H8"></path>
                <path d="M21 18H8"></path>
                <path d="M3 12v6"></path>
              </svg>
            </button>
          </div>

          <div
            className="*h-fit h-[20rem] overflow-auto p-4"
            data-hs-editor-field=""
          >
            <div className="p-2 [&_*]:outline-none [&_.tiptap-ProseMirror]:min-h-[280px] w-full">
              <EditorContent editor={editor} className="w-full" />
            </div>
          </div>
        </div>
      </div>
      {onError && (
        <p className="text-red-600 text-sm mt-2 capitalize*">{`${label} cannot empty`}</p>
      )}
    </div>
  );
};

export default Tiptap;
